const express = require("express");
const app = express();
app.use(express.json());
const translate = require("google-translate-api-x");
// const { translate } = require("@vitalets/google-translate-api");
app.listen(4000, () => {
  console.log("listening 4000");
});

app.post("/translate", async (req, res) => {
  console.log(req.body.string);

  const rets = await translate(req.body.string, { to: "en" });

  console.log(rets.text);

  res.status(200).json(rets.text);
});
