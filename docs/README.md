<h1 align="center">API Documentation</h1>

Welcome to the API Documentation! This guide outlines the endpoints for user authentication (Auth) and To Do list management (ToDo). Each section includes the necessary parameters and expected responses for seamless integration with the API. Let's explore the functionalities of the To Do API!

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md">Auth</a>
        <ul>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md#register">Register</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md#login">Login</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md#edit">Edit</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md#delete">Delete</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md#view">View</a></li>
        </ul>
    </li>
        <li>
        <a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/ToDoDocs.md">To Do</a>
        <ul>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/ToDoDocs.md#create">Create</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/ToDoDocs.md#view">View</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/ToDoDocs.md#edit">Edit</a></li>
            <li><a href="https://github.com/gbagush/ToDoListAPI/tree/main/docs/ToDoDocs.md#delete">Delete</a></li>
        </ul>
    </li>
  </ol>
</details>

## 📝 Note
Certain endpoints require a <b>bearer token</b> obtained from successful login for authorization. Obtain the token through [`/user/login`](https://github.com/gbagush/ToDoListAPI/tree/main/docs/AuthDocs.md#login) before using protected endpoints.
