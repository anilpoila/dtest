const express = require("express");
const app = express();
const cors = require("cors");
const _dbConnections = require("./cnfgstngs/settings");
const roles = require("./routes/role");
app.use(cors());
app.use("/roles", roles);

app.listen(_dbConnections["set_one"]["node_port"], () =>
  console.log(`http://localhost:${_dbConnections["set_one"]["node_port"]}`)
);
