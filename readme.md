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
