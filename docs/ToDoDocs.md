<h1 align="center">Auth API Documentation</h1>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#create">Create</a></li>
    <li><a href="#view">View</a></li>
    <li><a href="#edit">Edit</a></li>
    <li><a href="#delete">Delete</a></li>
  </ol>
</details>

## Create
To create a new To Do <i>`(require authentication)`</i>
### POST `/todo/create`
#### Parameter
```
{
    "title": "TODO_TITLE",
    "description": "TODO_DESCRIPTION",
    "deadline": "TODO_DEADLINE"
}
```
#### Response
```
{
    "status": "success",
    "message": "ToDo berhasil dibuat",
    "data": {
        "title": "TODO_TITLE",
        "description": "TODO_DESCRIPTION",
        "deadline": "TODO_DEADLINE"
    }
}
```

## View
To see the To Do that has been created <i>`(require authentication)`</i>
### GET `/todo/view`
#### Parameter
```
No need any parameter
```
#### Response
```
{
    "status": "success",
    "message": "Berhasil mendapatkan data ToDos",
    "data": [
        {
            "id": ID1,
            "title": "TITLE1",
            "description": "DESCRIPTION1",
            "deadline": "DEADLINE1"
        },
        {
            "id": ID2,
            "title": "TITLE2",
            "description": "DESCRIPTION2",
            "deadline": "DEADLINE2"
        }
    ]
}
```

## Edit
To edit To Do that has been made <i>`(require authentication)`</i>
### PUT `/todo/edit/:todoID`
#### Parameter:
```
{
    "title": "NEW_TODO_TITLE",
    "description": "NEW_TODO_DESCRIPTION",
    "deadline": "NEW_TODO_DEADLINE"
}
```
#### Response:
```
{
    "status": "success",
    "message": "Berhasil mengupdate data ToDo",
    "data": {
        "title": "NEW_TODO_TITLE",
        "description": "NEW_TODO_DESCRIPTION",
        "deadline": "NEW_TODO_DEADLINE"
    }
}
```

## Delete
To delete To Do that has been created <i>`(require authentication)`</i>
### DELETE `/todo/delete/:todoID`
#### Parameter:
```
No need any parameter
```
#### Response:
```
{
    "status": "success",
    "message": "Berhasil menghapus ToDo dengan id 6"
}
```