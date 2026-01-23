# Simple Blog

A clean, minimal blog web application built with **Node.js**, **Express**, and **EJS**.  
This project focuses on clarity, fundamentals, and thoughtful structure rather than unnecessary complexity.

The application allows users to create, view, edit, and delete blog posts.  
Posts are stored **in memory**, meaning they reset when the server restarts. This limitation is intentional for learning and architectural clarity.

---

## 🧠 Project Philosophy

Many beginner projects rush into databases, frameworks, and features without mastering the basics.  
This project does the opposite.

It is designed to demonstrate:

- Clear Express routing
- Server-side rendering with EJS
- Full CRUD functionality
- Clean folder structure
- Reusable layouts with partials
- Intentional styling focused on readability
- Proper Git and project hygiene

If you understand this project deeply, scaling it later becomes trivial.

---

## ✨ Features

- Create new blog posts
- View all posts on the home page
- Edit existing posts
- Delete posts
- Responsive, writing-focused layout
- Shared layout using EJS partials
- Basic error handling for invalid routes/actions

> ⚠️ Posts do **not** persist between server restarts.  
> This version does not use a database by design.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework and routing
- **EJS** – Server-side templating
- **CSS** – Custom styling (no frameworks)

---

## 📁 Project Structure

simple-blog/
├── index.js # Application entry point
├── views/
│ ├── index.ejs # Home / view posts
│ ├── new.ejs # Create post form
│ ├── edit.ejs # Edit post form
│ └── partials/
│ ├── header.ejs # Shared page header
│ └── footer.ejs # Shared page footer
├── public/
│ └── css/
│ └── styles.css # Global styles
├── README.md
└── package.json

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/simple-blog.git
cd simple-blog
2. Install dependencies
npm install
3. Start the server
node index.js
4. Open the app
```

Visit:

http://localhost:3000


## 🔁 Available Routes
| Method | Route                    | Description                                   |
|-------:|--------------------------|-----------------------------------------------|
| GET    | /                        | Redirects to all posts                        |
| GET    | /posts                   | Display all blog posts                        |
| GET    | /posts/new               | Render form to create a new post              |
| POST   | /posts                   | Create a new post                             |
| GET    | /posts/:id               | View a single post                            |
| GET    | /posts/:id/edit          | Render edit form for a post                   |
| POST   | /posts/:id/update        | Update an existing post                      |
| POST   | /posts/:id/delete        | Delete a post                                 |
| GET    | *                        | Render 404 error page                         |


## 🎨 Design & Styling Notes
- Serif typography for long-form readability

- Constrained content width for focus

- Minimal color palette

- Mobile-first spacing and layout

- No UI frameworks — pure CSS for control and clarity


## 🧪 Error Handling
- Invalid post IDs return a 404 response

- Empty submissions are guarded against

- Routes fail gracefully instead of crashing the app


## 🔮 Possible Future Improvements
- Database persistence (MongoDB / PostgreSQL)

- Markdown support for posts

- Pagination

- Authentication

- MVC refactor

- Dark mode toggle

- Deployment (Render / Fly.io / Railway)