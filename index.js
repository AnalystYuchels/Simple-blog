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

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));
  res.render("edit", { post });
});

app.post("/posts/:id/update", (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter(p => p.id !== Number(req.params.id));
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});