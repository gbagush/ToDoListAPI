<div align="center">
    <h1>To Do List API</h1>
    <p>To Do list API using <a href="https://expressjs.com/">Express.js</a></p>
</div>

# ⚙️ Prerequisites
Prerequisites for running this project are as follows:
- [Node.js](https://nodejs.org/)
- MySQL server
- Code Editor for convenience

# 🛠 How to Run Program
Follow these steps to run the program:

## Step 1: Setup MySQL Database
* Create new database
* Upload `db.sql` to your database

## Step 2: Configure the .env File
* rename `.env.example` file to `.env`
* edit if needed
    ```
    PORT = 5000
    DB_HOST = 'localhost'
    DB_PORT = 3306
    DB_NAME = 'todos_db'
    DB_USERNAME = 'root'
    DB_PASSWORD = ''
    JWT_SECRET = 'belanegara'
    ```

## Step 3: Install Dependencies
* Run the following command to install all the required dependencies:
    ```
    npm install
    ```

## Step 4: Run the Program (in development mode)
* After the dependency installation is complete, you can run the program using the following command:
    ```
    npm run dev
    ```

# 📜 Documentation
Read the documentation for using the API [here](https://github.com/gbagush/ToDoListAPI/tree/main/docs).