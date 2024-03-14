const express = require("express");

const port = 5000;

const app = express();

app.get("/user", (req, res, next) => {
  return res.json({ message: "Hello from /user route" });
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
