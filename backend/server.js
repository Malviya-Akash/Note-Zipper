const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const data = require("./data/notes");

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.json(data);
});

app.get("/api/notes/:id", (req, res) => {
  const note = data.find((n) => {
    return n.id == req.params.id;
  });
  res.send(note);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server started on port 3000"));
