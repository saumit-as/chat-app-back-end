require("dotenv").config();
const fetch = require("node-fetch");
// import fetch from "node-fetch";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const translate = require("google-translate-api-x");
// const { translate } = require("@vitalets/google-translate-api");
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("listening 4000");
});

app.post("/translate", async (req, res) => {
  console.log(req.body.string);

  const rets = await translate(req.body.string, { to: "en" });

  console.log(rets.text);

  res.status(200).json(rets.text);
});
