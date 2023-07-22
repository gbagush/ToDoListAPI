const express = require('express');
const todoController = require('../controllers/todo.controller');
const passport = require('passport');

const router = express.Router();

router.post('/create', passport.authenticate('jwt', {session:false}), todoController.create);
router.get('/view', passport.authenticate('jwt', {session:false}), todoController.viewTodos);
router.put('/edit/:id', passport.authenticate('jwt', {session:false}), todoController.update);
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), todoController.deleteTodo);

module.exports = router