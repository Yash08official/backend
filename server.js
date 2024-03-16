const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./model/user");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const port = 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

/**Route for send all users on frontend */

app.get("/users", async (req, res, next) => {
  try {
    const users = await userModel.find();
    return res.json(users);
  } catch (error) {
    return res.json({ error });
  }
});

/**Route for create new entry in database in our case we are createing a user */

app.post("/user", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.create({ name, email, password });

    if (!user) {
      return res.json({ error: "user not created" });
    }

    return res.json(user);
  } catch (error) {
    return res.json({ error });
  }
});

app.listen(port, () => {
  try {
    mongoose.connect(
      "mongodb+srv://wankhadesaurabh30:ERDY3k4lXHxVKoUu@finalyearproject.cke2fsr.mongodb.net/FinalYearProject?retryWrites=true&w=majority&appName=FinalYearProject"
    );
    console.log(`server running on http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
});
