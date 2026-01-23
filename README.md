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

| Path / File              | Purpose                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| project-root/            | Root directory of the application                                       |
| ├── index.js             | Application entry point, Express server setup                           |
| ├── package.json         | Project metadata, scripts, and dependencies                             |
| ├── package-lock.json    | Locked dependency versions                                              |
| ├── README.md            | Project documentation                                                   |
| ├── /public              | Static assets served by Express                                         |
| │   ├── /css              | Application-wide stylesheets                                            |
| │   │   └── styles.css    | Global styles, layout, typography, spacing                              |
| │   └── /images           | Static images (if any)                                                  |
| ├── /views               | EJS templates                                                           |
| │   ├── /partials        | Reusable layout components                                              |
| │   │   ├── header.ejs   | Page header and navigation                                              |
| │   │   └── footer.ejs   | Page footer                                                             |
| │   ├── index.ejs        | List all blog posts                                                     |
| │   ├── new.ejs          | Form to create a new post                                               |
| │   ├── show.ejs         | Display a single post                                                   |
| │   ├── edit.ejs         | Edit an existing post                                                   |
| │   ├── error.ejs        | Error page (404 / server errors)                                        |
| └── /data                | Application data layer                                                  |
|     └── posts.js         | In-memory post storage and helpers                                     |

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/simple-blog.git
cd simple-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node index.js
```

### 4. Open the app

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