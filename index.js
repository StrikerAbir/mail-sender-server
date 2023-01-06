const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 1000;
const app = express();

const router=require('./routes/router')


// middleware
app.use(cors());
app.use(express.json());

app.use(router)

app.listen(port, () => {
  console.log("send mail running on", port);
});