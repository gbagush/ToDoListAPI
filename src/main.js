require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/user.route');
const todoRouter = require('./routes/todo.route');
require('./middlewares/passport')

const app = express();
const PORT = process.env.PORT || 5000; // Import PORT dari .env

app.use(express.json());
app.use('/user', userRouter);
app.use('/todo', todoRouter);

app.listen(PORT, () => {
	console.log(`Server runing di port ${PORT}`);
})