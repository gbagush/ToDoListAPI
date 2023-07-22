<h1 align="center">Auth API Documentation</h1>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#register">Register</a></li>
    <li><a href="#login">Login</a></li>
    <li><a href="#edit">Edit</a></li>
    <li><a href="#delete">Delete</a></li>
    <li><a href="#view">View</a></li>
  </ol>
</details>

## Register
To create a new account
### POST `/user/register`
#### Parameter
```
{
    "username": "YOUR_USERNAME",
    "email": "YOUR_EMAIL@DOMAIN.COM",
    "password": "YOUR_SECRET_PASSWORD"
}
```
#### Respone
```
{
    "status": "success",
    "message": "Data berhasil disimpan",
    "data": {
        "username": "YOUR_USERNAME",
        "email": "YOUR_EMAIL@DOMAIN",
        "password": "YOUR_SECRET_PASSWORD"
    }
}
```

## Login
To login to an existing account
### POST `/user/login`
#### Parameter
```
{
    "username": "YOUR_USERNAME",
    "email": "YOUR_EMAIL@DOMAIN",
    "password": "YOUR_SECRET_PASSWORD"
}
```
#### Respone
```
{
    "status": "success",
    "message": "Login berhasil",
    "token": "JWT_TOKEN",
    "data": {
        "id": ID,
        "username": "YOUR_USERNAME",
        "email": "YOUR_EMAIL@DOMAIN"
    }
}
```

## Edit
To edit account information <i>`(require authentication)`</i>
### PUT `/user/edit`
#### Parameter
```
{
    "username": "NEW_USERNAME",
    "email": "NEW_EMAIL@DOMAIN",
    "password": "NEW_PASSWORD"
}
```
#### Response
```
{
    "status": "success",
    "message": "Data berhasil diperbarui"
}
```

## Delete
To delete an account <i>`(require authentication)`</i>
### DELETE `/user/delete`
#### Parameter
```
No need any parameter
```
#### Response
```
{
    "status": "success",
    "message": "Berhasil menghapus data user"
}
```

## View
To get all registered accounts <i>`(require authentication)`</i>
### GET `/user/view`
#### Parameter
```
No need any parameter
```
Response:
```
{
    "status": "success",
    "message": "Berhasil mendapatkan data user",
    "data": [
        {
            "id": ID_USER_1,
            "username": "USERNAME1",
            "email": "EMAIL1@DOMAIN"
        },
        {
           "id": ID_USER_2,
            "username": "USERNAME2",
            "email": "EMAIL2@DOMAIN"
        }
    ]
}
```