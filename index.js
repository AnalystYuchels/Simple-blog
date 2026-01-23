import express from "express";

const app = express();
const port = 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// In-memory data store
let posts = [];
let idCounter = 1;

// Home - view all posts
app.get("/", (req,res) => {
  res.render("index", { posts });
});

// New post form
app.get("/new", (req, res) => {
  res.render("new");
});

// Create post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send("Title and content are required.");
  }

  posts.push({
    id: idCounter++,
    title,
    content,
    createdAt: new Date()
  });

  res.redirect("/");
});

// Edit post form
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));

  if (!post) {
    return res.status(404).send("Post not found.");
  }

  res.render("edit", { post });
});

// Update post
app.post("/posts/:id/update", (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));

  if (!post) {
    return res.status(404).send("Post not found.");
  }

  post.title = req.body.title;
  post.content = req.body.content;

  res.redirect("/");
});

// Delete post
app.post("/posts/:id/delete", (req, res) => {
  const exists = post.some(p => p.id === Number(req.params.id));

  if (!exists) {
    return res.status(404).send("Post not found.");
  }

  posts = posts.filter(p => p.id !== Number(req.params.id));

  res.redirect("/");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}.`);
});