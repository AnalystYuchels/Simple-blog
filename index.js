import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];
let idCounter = 1;

app.get("/", (req,res) => {
  res.render("index", { posts });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});