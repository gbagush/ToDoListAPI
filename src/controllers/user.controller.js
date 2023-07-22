const { response } = require('express');
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
    const { body } = req;

    if ( !body.username || !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'Data anda tidak sesuai'
        });
    };

    try {
        const user = await userService.getUserByEmail(body.email)

        if (user[0][0]) {
            return res.status(409).json({
                status: 'fail',
                message: 'Email telah terdaftar'
            });
        };

        await userService.register(body);
        
        return res.status(201).json({
            status: 'success',
            message: 'Data berhasil disimpan',
            data: body
        });

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Gagal menyimpan data anda'
        });
    }
}

const login = async (req, res) => {
    const { body } = req;

    if ( !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'Email dan Password tidak boleh kosong'
        });
    }

    try {
        const user = await userService.login(body);

        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'Email dan password salah'
            })
        }

        const dataUser = user[0][0]

        const jwtToken = jwt.sign(
            {id: dataUser.id, email: dataUser.email}, 
            process.env.JWT_SECRET
        )

        return res.status(200).json({
            status: 'success',
            message: 'Login berhasil',
            token: jwtToken,
            data: dataUser
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Login gagal'
        });
    }
}

const update = async (req, res) => {
    const id = req.user[0][0].id;
    const { body } = req;

    if ( !body.username || !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'Data anda tidak sesuai'
        });
    }

    try {
        await userService.update(id, body);

        return res.status(200).json({
            status: 'success',
            message: 'Data berhasil diperbarui'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Data gagal diperbarui'
        });
    }
}

const viewUsers = async (req, res) => {
    const [users] = await userService.viewUsers();

    try {
        return res.status(200).json({
            status: 'success',
            message: 'Berhasil mendapatkan data user',
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Gagal mendapatkan data user'
        });
    }
}

const deleteUser = async (req, res) => {
    const id = req.user[0][0].id;

    try {
        await userService.deleteUser(id);

        return res.status(200).json({
            status: 'success',
            message: 'Berhasil menghapus data user'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Gagal menghapus data user'
        });
    }
}

module.exports = { register, login, update, viewUsers, deleteUser }