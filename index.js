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

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  posts.push({
    id: idCounter++,
    title,
    content,
    createdAt: new Date()
  });

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});