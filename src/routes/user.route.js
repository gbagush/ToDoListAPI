const express = require('express');
const userController = require('../controllers/user.controller');
const passport = require('passport');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/edit/', passport.authenticate('jwt', {session:false}), userController.update);
router.get('/view', passport.authenticate('jwt', {session:false}), userController.viewUsers);
router.delete('/delete/', passport.authenticate('jwt', {session:false}), userController.deleteUser);

module.exports = router
