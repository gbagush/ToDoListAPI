const dbPool = require('../config/database');

const create = async (id, body) => {
    const query = `INSERT INTO todos (user_id, title, description, deadline) VALUES ('${id}', '${body.title}', '${body.description}', '${body.deadline}')`;

    return dbPool.execute(query);
};

const viewTodos = async (id) => {
    const query = `SELECT id, title, description, deadline FROM todos WHERE user_id = ${id}`;

    return dbPool.execute(query);
}

const update = async (todoID, userID, body) => {
    query = `UPDATE todos SET title = '${body.title}', description = '${body.description}', deadline = '${body.deadline}' WHERE id = ${todoID} AND user_id = ${userID}`

    return dbPool.execute(query);
}

const deleteTodo = async (todoID, userID) => {
    query = `DELETE FROM todos WHERE id = ${todoID} AND user_id = ${userID}`;

    return dbPool.execute(query);
}

module.exports = { create, viewTodos, update, deleteTodo }
