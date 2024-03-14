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
