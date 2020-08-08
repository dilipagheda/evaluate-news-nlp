const axios = require("axios");
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.API_KEY);

const API_KEY = process.env.API_KEY;

const app = express();

app.use(cors());

app.use(express.static(path.resolve("../../dist")));

app.get("/sentiment", function (req, res) {

  const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
  const params = {
    key: API_KEY,
    lang: "en",
    txt: req.query.text,
  };

  axios({
    url: baseUrl,
    method: "post",
    params: params,
  })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
