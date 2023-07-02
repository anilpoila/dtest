const express = require("express");
const app = express.Router();
const cors = require("cors");
const client = require("../dbcnnct/dbcnnct");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.get("/getroles", async function (req, res) {
  try {
    client
      .keys("roles")
      .then((data) => res.json({ data: data }))
      .catch(console.error)
      .finally(() => client.client.close());
  } catch (error) {
    console.error("Error retrieving documents:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
