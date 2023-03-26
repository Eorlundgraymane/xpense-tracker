const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", 'ejs');
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));


const mainRouter = require("./routers/mainRouter");

app.use(mainRouter);

app.listen(PORT, () => {
  console.log("EXT online");
});
