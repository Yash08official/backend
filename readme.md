# Learning Backend (Nodejs , Expressjs)

## Setup

minimum setup of a node , express application

### Initialization

first we need to initialize a nodejs project , to initialize a new project
simply type in terminal

```bash
npm init -y
```

### Installation

Now we need to install some dependencies and packages which will help us in our development , dependencies have two type `development dependencies`, like nodemon we only use in development for reload a server but not in production we use node insted. and `production / core dependencies` we use when we deploy our app or build our app

```bash
npm i express mongoose cors
```

for development dependencies

```bash
npm i nodemon --save-dev
```

then , your package.json will look like

```json
...
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.3",
    "mongoose": "^8.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
  ...
```

Now create a `.gitignore` file , it will help us to not push unwanted and secret files on github like node_modules , and .env files

### Writing Code

Now create a server.js (any name) file and past the code init

```js
const express = require("express");

const port = 5000;

const app = express();

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
```

Now we need some scripts to run our development and production server
there are two method , run every time `nodemon server.js` in terminal or define a script for it so you no need to run big command in terminal

we can define scripts in `package.json` file

```json
  ...
 "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
  ...
```

we can run scripts like in terminal

```
npm run <script name>
```

In our case

```
npm run dev
```

We can understand from a image below

![Flow of Backend and Frontend and Database](https://github.com/Yash08official/backend/blob/aeb3562c8e8a0800a919bcd9e066a461b63a9ed1/assets/arch.png)

fontend , backed and database is seprate from each other they dont know about other one like we can build a apis in nodejs , python or in java and frontend only need to know a endpoint to call like `/api/post` , as well we can use any database like postgres, mongodb or mysql and forntend can be build in any technology Html , React etc...

### Create a route

Now create a route , to handle a request form frontend , routes can be
`/api/user` , `/api/post` etc...

```js
...
app.get("/user", (req, res, next) => {
  return res.json({ message: "Hello from /user route" });
});
...
```

Routes can be used for CRUD Oprations and for every opration we have request type like GET , POST , PATCH and DELETE..

GET is used when you just need to send data from serverto client/frontend , it not support any body (it means we send in insomenia/postman in json field), we cant send data from client to server in body , insted we use query and params

example , I want a products of color red and size small so i will send a request to server like

```js
const response = await axios.get("/api/products?color=red&size=small");
```

In POST , if we want to send a data from client to server , it is best way to send a data secuerly like username , password or any confedential data/information. it supports body means we can send a data from client to server

example , I want to register a user or login a user so i want to send a username , and password

```js
const response = await axios.post("/api/auth", {
  username: "yash",
  password: "secret",
});
```

here `/api/auth` is a api endpoint you created on backend , i can be any thing

Same for Patch , when ever we need to update a existing entity in database, we use patch , we can use post for update but its a best practice and preffered way to use patch when we perform any updations in database

example , I want to update a name of a product

```js
const response = await axios.patch("/api/product/<productId>", {
  name: "New updated name",
});
```

we used params above in backend your endpoint must look like `/api/product/:id`

And Now DELETE , same case as Patch when ever we want to delete something from database then we used DELETE , same we can used post for it but used delete insted its a best practice

example , i want to delete a product from `products` collection

```js
const response = await axios.delete("/api/product/<productId>");
```
