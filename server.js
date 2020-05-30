const express = require("express");

const app = express();

app.use(express.static("./dist/htKZ"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/htKZ/" })
);

app.listen(process.env.PORT || 8080);
