const { response } = require('express');
const todoService = require('../services/todo.service');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
    const { body } = req;

    if ( !body.title || !body.description || !body.deadline ) {
        return res.status(400).json({
            status: 'fail',
            message: 'Data anda tidak sesuai'
        });
    };
        
    try {
        await todoService.create(req.user[0][0].id, body);

        return res.status(201).json({
            status: 'success',
            message: 'ToDo berhasil dibuat',
            data: body
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'ToDo gagal dibuat'
        });
    };
};

const viewTodos = async (req, res) => {
    try {
        const [todos] = await todoService.viewTodos(req.user[0][0].id);

        return res.status(200).json({
            status: 'success',
            message: 'Berhasil mendapatkan data ToDos',
            data: todos
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Gagal mendapatkan data ToDos'
        });
    };
};

const update = async (req, res) => {
    const { body } = req;
    todoID = req.params.id;
    userID = req.user[0][0].id;


    if ( !body.title || !body.description || !body.deadline ) {
        return res.status(400).json({
            status: 'fail',
            message: 'Data anda tidak sesuai'
        });
    };

    try {
        await todoService.update(todoID, userID, body);

        return res.status(200).json({
            status: 'success',
            message: `Berhasil mengupdate ToDo dengan id ${todoID}`,
            data: body
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Gagal mengupdate data ToDo'
        });
    };
};

const deleteTodo = async (req, res) => {
    todoID = req.params.id;
    userID = req.user[0][0].id;

    try {
        await todoService.deleteTodo(todoID, userID);

        return res.status(200).json({
            status: 'success',
            message: `Berhasil menghapus ToDo dengan id ${todoID}`
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Gagal menghapus ToDo'
        });
    }
}

module.exports = { create, viewTodos, update, deleteTodo }
