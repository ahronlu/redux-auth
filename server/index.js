const express = require("express");
const http = require("http");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = require("./router");

mongoose.connect("mongodb://localhost:auth/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("server listening on", port);
