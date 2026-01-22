# Simple Blog

A clean, minimal blog application built with Node.js, Express, and EJS.  
This project focuses on clarity, readability, and fundamental web application architecture.

## Why This Project Exists

Many beginner projects focus on flashy features before mastering the basics.
This project intentionally strips things down to demonstrate:

- Clear routing
- Server-side rendering
- CRUD fundamentals
- Thoughtful project structure
- Clean Git history

## Features

- Create blog posts
- View all posts on the home page
- Edit existing posts
- Delete posts
- Responsive, distraction-free design

> Posts are stored in memory and reset when the server restarts.

## Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **EJS** – Templating engine
- **CSS** – Layout and styling

## Project Structure

simple-blog/
├── index.js
├── views/
├── public/
│ └── css/
├── README.md


## Running the Project Locally

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Start the server:

```bash
node index.js
```

**Open your browser and visit:**

http://localhost:3000

## Future Improvements

- Database persistence

- Markdown support

- Authentication

- Pagination

- MVC refactor