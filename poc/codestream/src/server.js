const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("SERVER STARTED AT PORT: " + PORT);
});

// serve html page
app.get("/", (req, res) => {
  try {
    // res.sendFile(__dirname + "/public/index.html");
    // res.writeHead(206, headers);
    const codeStream = fs.createReadStream("./poc1.js");
    codeStream.pipe(res);

  } catch (err) {
    res.status(500).send("internal server error occurred");
  }
});