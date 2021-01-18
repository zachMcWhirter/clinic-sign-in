"use strict";

const app = require("express")();
const PORT = process.env.PORT || "10020";

app.get("/hello", function (req, res) {
  return res.status(200).send({ hello: "world" });
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`);
});