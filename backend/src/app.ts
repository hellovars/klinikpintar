//app.js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({message: "Hello World!"});
});

export { app };