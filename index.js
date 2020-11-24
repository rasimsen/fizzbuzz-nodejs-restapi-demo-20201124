const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require("./fizzbuzz-route");
route(app);

app.listen(3001, function () {
  console.log("Server started");
});
