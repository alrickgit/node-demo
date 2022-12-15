const express = require("express");
const app = express();
const portNumber = 9090;

app.listen(portNumber, () => {
  console.log("Deloitte Node App Started!");
  console.log(`Go to http://localhost:${portNumber} to view the app.`);
});

app.get("/", (req, res) => {
  console.log("Welcome");
  res.send("Welcome to Deloitte Node App");
});

app.get("/home", (req, res) => {
  console.log("Home");
  res.send("Home...");
});

app.get("/about", (req, res) => {
  console.log("About");
  res.send("About...");
});

app.get("/contacts", (req, res) => {
  console.log("Contacts");
  res.send("Contacts....");
});
