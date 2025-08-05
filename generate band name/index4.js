import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

// body-parser is still needed for all POST requests
app.use(bodyParser.urlencoded({ extended: true }));

function generate(req, res, next) {
  // This function will now only run for the POST request
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// The 'generate' middleware is now passed as an argument to the POST route.
// It will run only on requests to this specific route.
app.post("/submit", generate, (req, res) => {
  res.send(`Your band name is :- <i>${bandName}</i>`);
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});