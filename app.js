const express = require("express");
const app = express();
const path = require("path");
app.get("/", (req, res) => {
  console.log("hello world");
  res.status(200).sendFile(path.join(__dirname, "index.js/index.html"));
});
app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.js/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.js/contact-me.html"));
});
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.js/404.html"));
});

app.listen(8080, () => {
  console.log("server is listening on port 8080...");
});
