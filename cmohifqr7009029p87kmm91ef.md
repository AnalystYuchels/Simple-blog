---
title: "File Paths & Directory Structure E"
seoTitle: "File Paths & Directory Structure Explained for Beginners"
seoDescription: "Confused by file paths, or why your code can't find a file that exists? This guide covers directory structure, path syntax, and terminal navigation."
datePublished: 2026-04-27T18:07:58.778Z
cuid: cmohifqr7009029p87kmm91ef
slug: file-paths-directory-structure
cover: https://cdn.hashnode.com/uploads/covers/69a84cffe55311e40f053e5f/5c98bacc-fa19-4c63-ba6f-89f90fd41df9.svg
tags: terminal, webdev, windows, beginners, codenewbies

---

When I first started learning to code, I kept running into the same wall. I'd follow a tutorial, type a command into the terminal, and get slapped with something like:

```bash
Error: Cannot find module './utils/helpers'
```

Or I'd try to open a file in my editor, and it would say the file didn't exist, even though I could *see* it sitting right there on my desktop, taunting me like it is my '*village people'*.

The problem wasn't the code. The problem was that I had no mental model for where files actually live or how the computer finds them. Nobody had ever explained it to me properly. Tutorials would show a path like `./src/components/Button.jsx` and just *assume* I understood what that meant.

I didn't. And if you're reading this, maybe you don't either.

## 🧠 First, Let's Build the Right Mental Model

Your computer stores everything: your music, your code, your embarrassing selfies from 2004, in **files**. But files don't just float around randomly in the void. They live inside **folders** (also called **directories**). And those folders can live inside *other* folders. And those folders can live inside *even more* folders.

Here's the mental model that finally made everything click for me:

> Think of your computer's file system like a tree. There's one trunk at the very bottom (called the **root**), and every single file and folder on your entire computer branches out from there. Nothing exists outside the tree.

That tree analogy is important. Burn it into your brain. We'll keep coming back to it throughout this entire article.

Now, a crucial question: What *is* the root? Where is the trunk of this tree?

The answer depends on your operating system, and **Windows** operates very differently from **macOS** and **Linux**, so let's address each one properly.

## 🌳 The Root: Where Everything Begins

Every file system has a **root directory**, the absolute starting point of the entire directory tree. Every file, every folder, every single thing on your computer ultimately traces back to the root.

### On macOS and Linux:

On macOS and Linux (and any other Unix-based system), the root is a single forward slash:

```plaintext
/
```

That's it. One character. Everything in the entire system lives somewhere inside `/`. When you look at a path like `/home/yuchels/projects`, you're saying: *"Start at the root (*`/`*), go into* `home`*, then go into* `yuchels`*, then go into* `projects`*."*

There's only **one root** on a Unix-based system. One tree, and everything hangs off it.

### On Windows:

Windows works differently. Instead of one single root, **Windows can have multiple roots** one per storage drive or partition. Each root is named with a **drive letter** followed by a colon and a backslash:

```plaintext
C:\
D:\
E:\
```

*   `C:\` is almost always where your Windows operating system and main files live
    
*   `D:\` or `E:\` are typically secondary drives, external hard drives, USB sticks, or DVD drives
    

So on Windows, there isn't one tree; there are potentially **several trees**, each rooted at its own drive letter. Your program files are probably in the `C:\` tree. Your external backup drive might be the `E:\` tree. Each one is its own separate hierarchy.

> 💡 **Why** `C:`**?**
> 
> Historical reason: early PCs reserved `A:` and `B:` for floppy disk drives. Hard drives started at `C:`, and the convention stuck. In most modern Windows setups you'll never see `A:` or `B:` at all.

### The Separator Character: `/` vs `\`

Here's another place Windows diverges, and this one *will* bite you if you don't know about it:

| Operating System | Path Separator | Example |
| --- | --- | --- |
| macOS | Forward slash `/` | `/Users/yuchels/projects` |
| Linux | Forward slash `/` | `/home/yuchels/projects` |
| Windows | Backslash `\` | `C:\Users\Yuchels\Projects` |

The separator is how the computer knows where one folder name ends, and the next begins. On macOS and Linux, it's `/`. On Windows, it's `\`.

**Why does this matter?** Because if you copy a path from a Windows tutorial and paste it into a macOS terminal (or vice versa), it will break. And because in many programming languages and tools, the backslash `\` is also used as an **escape character** (a special character that means "the next thing is special"), which creates all kinds of confusion when you try to use it in Windows paths inside code.

> 💡 **Good news for Windows developers:**
> 
> Most modern tools, including Node.js, Python, VS Code, Git Bash, and PowerShell, will accept forward slashes `/` in paths even on Windows. Many developers on Windows just use `/` everywhere in their code to keep things consistent and cross-platform. We'll come back to this.

## 📂 Directories vs. Files:

Before we go further, let's nail down two terms that you'll see everywhere:

| Term | What It Means |
| --- | --- |
| **File** | A named container holding actual data: text, an image, compiled code, a video, etc. |
| **Directory** | A named container that holds other files and/or other directories |

> 💡 **"Folder" and "directory" mean the exact same thing.**
> 
> "Folder" is the friendly, visual term that came with graphical operating systems. "Directory" is the older, command-line term you'll see in technical documentation. They refer to the same concept. Don't let the interchangeable use of these words trip you up.

A directory can be **empty**. It can hold **files**. It can hold other **directories** (called **subdirectories**). And those subdirectories can hold *their own* files and subdirectories. That's how the tree grows deeper and more complex.

Here's a concrete example of what a simple directory tree looks like when drawn out:

```plaintext
/ (root on Linux/macOS)   OR   C:\ (root on Windows)
│
├── home/ (or Users\ on Windows)
│   └── yuchels/
│       ├── documents/
│       │   └── resume.pdf
│       ├── projects/
│       │   └── portfolio/
│       │       └── index.html
│       └── pictures/
│           └── selfie.jpg
│
├── etc/
└── usr/
```

Reading from top to bottom: the root branches into several directories. One of those is `home` (or `Users` on Windows). Inside that lives a directory named after the user. Inside *that* are personal directories like `documents`, `projects`, and `pictures`. And so on, deeper and deeper.

Every file has an exact location in this tree. A file path is simply the **directions** for how to reach it.

## 🗺️ What is a File Path?

A **file path** is the complete address of a file or directory on your computer; a set of directions that tells the operating system exactly how to navigate the directory tree to find what you're looking for.

Think of it like a physical address. A home address works because it's hierarchical: country → state → city → street → house number. Each level narrows down the location more precisely. A file path works the same way: root → top-level folder → subfolder → subfolder → filename.

Here's the same file written as a path on each major OS:

**macOS:**

```plaintext
/Users/yuchels/projects/portfolio/index.html
```

**Linux:**

```plaintext
/home/yuchels/projects/portfolio/index.html
```

**Windows:**

```plaintext
C:\Users\Yuchels\Projects\Portfolio\index.html
```

Reading the macOS/Linux path like a sentence: *"Start at the root (*`/`*). Go into* `Users`*. Inside there, go into* `yuchels`*. Then into* `projects`*. Then into* `portfolio`*. There you'll find a file called* `index.html`*."*

The Windows path says the same thing, just starting from the `C:\` root and using backslashes as separators.

## 🧭 Two Types of Paths: Absolute vs. Relative

This is the concept that trips up almost every beginner, and the one that explains most "file not found" errors. There are **two completely different ways** to write a file path, and they mean very different things.

### 🔒 Absolute Paths:

An **absolute path** gives the *complete* address of a file, starting from the root. It doesn't matter where you currently are on the file system, an absolute path always points to exactly one specific location.

**macOS / Linux:**

```plaintext
/Users/yuchels/projects/portfolio/index.html
```

**Windows:**

```plaintext
C:\Users\Yuchels\Projects\Portfolio\index.html
```

Think of it like giving someone your full postal address. No matter where they're coming from, Lagos, London, Tokyo, they can find your house because you've given them every single piece of navigational information, from the country all the way down to the house number.

**How to recognise an absolute path:**

*   On macOS/Linux: it **always starts with** `/`
    
*   On Windows: it **always starts with** a drive letter like `C:\` or `D:\`
    

If a path starts with either of those, it's absolute. Full stop.

### 📍 Relative Paths:

A **relative path** gives the address of a file *relative to wherever you currently are* in the directory tree.

```plaintext
./portfolio/index.html
```

This path only makes sense *if you already know where you're starting from*. If you're standing at `/Users/yuchels/projects/`, then `./portfolio/index.html` means *"from here, go into* `portfolio` *and find* `index.html`*"*. But if someone else is standing somewhere completely different on the filesystem, that same relative path points to a completely different place, or nowhere at all.

Relative paths are like giving someone directions with no starting point: *"Turn left at the corner, then it's the second house on the right."* Useful if they're already standing at the right place. Useless if they're not.

### The Relative Path Symbols You'll See Everywhere

Here's the shorthand that makes relative paths work:

| Symbol | Meaning | Example |
| --- | --- | --- |
| `.` | The current directory (where you are right now) | `./index.html` |
| `..` | The parent directory, one level *up* | `../styles.css` |
| `./folder` | A subfolder inside the current directory | `./images/logo.png` |
| `../folder` | A folder one level up from where you are | `../utils/helpers.js` |
| `../../folder` | Two levels up, then into a folder | `../../config/settings.json` |

Let's make this concrete. Say your project looks like this:

```plaintext
my-website/
├── index.html
├── about.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

If you are *inside* the `js/` folder and you want to reference `styles.css`, you'd write:

```plaintext
../css/styles.css
```

That `..` says: *"Go up one level (out of* `js/` *and back into* `my-website/`*)."* Then `css/styles.css` says: *"Now go into* `css/` *and find* `styles.css`*."*

If you're writing a `<link>` tag in `index.html` (which lives at the top of `my-website/`), you'd write:

```html
<link rel="stylesheet" href="./css/styles.css">
```

Here, `./css/styles.css` says: *"From where I am (the* `my-website/` *root), go into* `css/` *and find* `styles.css`*."*

### Absolute vs. Relative: When Do You Use Each?

| Situation | Use |
| --- | --- |
| Referencing files *within* your own project | Relative paths keep the project portable |
| Running a specific one-off command in the terminal | Absolute paths; no ambiguity |
| Linking stylesheets/scripts in HTML | Relative paths (usually) |
| Config files that reference fixed system locations | Absolute paths |
| Sharing code with someone else or deploying to a server | Relative paths; they'll work regardless of where the project lives |

## 🏠 The Home Directory

Every operating system has a concept of a **home directory**, a special folder that belongs to you, the logged-in user. It's where your personal files, documents, desktop contents, and project folders typically live.

### On macOS:

```plaintext
/Users/yuchels/
```

### On Linux:

```plaintext
/home/yuchels/
```

### On Windows:

```plaintext
C:\Users\Yuchels\
```

### The `~` Shortcut (macOS and Linux)

On macOS and Linux, the tilde character (`~`) is a shortcut that automatically expands to your full home directory path. These two paths are identical:

```bash
/home/yuchels/projects/portfolio/index.html
~/projects/portfolio/index.html
```

The `~` saves you from typing your full home path every time. You'll see it constantly in tutorials and documentation. Every time you see `~/something`, just mentally read it as `your home folder/something`.

### What About Windows?

Windows doesn't use `~` in Command Prompt by default. However, it has two equivalent environment variables:

```batch
%USERPROFILE%\Projects\Portfolio\index.html
%HOMEPATH%\Projects\Portfolio\index.html
```

These work the same way. In PowerShell (the more modern Windows terminal), `~` *does* work:

```powershell
~\Projects\Portfolio\index.html
```

So if you're using PowerShell (which you should be, over the old Command Prompt), you get the same `~` convenience as macOS and Linux users.

## 💻 Navigating the File System in the Terminal

All of this becomes very real once you start using the terminal (also called the command line). Here are the fundamental navigation commands:

### Your Current Location: `pwd` vs `cd`

Before you do anything, you need to know *where* you are. On macOS and Linux:

```bash
pwd
```

`pwd` stands for **Print Working Directory**. It prints your current location as a full absolute path.

```bash
# Example output on Linux:
/home/yuchels/projects
```

On Windows (Command Prompt or PowerShell), the equivalent is:

```batch
cd
```

Running `cd` with *no arguments* on Windows just shows you where you are. It is not intuitive, but that's how it works. In PowerShell, `pwd` also works (PowerShell was designed to be more familiar to Unix users).

```powershell
# PowerShell output:
Path
----
C:\Users\Yuchels\Projects
```

### Listing Files: `ls` vs `dir`

To see what's inside your current directory:

**macOS / Linux / PowerShell:**

```bash
ls
```

**Windows Command Prompt:**

```batch
dir
```

Both commands list all the files and folders in your current directory. `ls` is the Unix way; `dir` is the Windows way. PowerShell accepts both.

On macOS/Linux, `ls -la` gives you a long listing with hidden files, permissions, file sizes, and modification dates. On Windows Command Prompt, `dir /a` shows hidden files too.

### Moving Around: `cd` (works everywhere)

The good news is that `cd` works the same on Windows, macOS, and Linux. It stands for **Change Directory**.

**Navigate into a folder:**

```bash
cd projects          # go into a folder called 'projects'
```

**Go up one level (to the parent folder):**

```bash
cd ..                # works on all three operating systems
```

**Jump to your home directory:**

```bash
cd ~                 # macOS and Linux
cd %USERPROFILE%     # Windows Command Prompt
cd ~                 # Windows PowerShell (also works)
```

**Navigate using an absolute path:**

```bash
# macOS/Linux:
cd /home/yuchels/projects/portfolio

# Windows Command Prompt:
cd C:\Users\Yuchels\Projects\Portfolio

# Windows PowerShell (also accepts forward slashes):
cd C:/Users/Yuchels/Projects/Portfolio
```

**Navigate using a relative path:**

```bash
cd ./portfolio       # go into 'portfolio' from where you currently are
cd ../other-project  # go up one level, then into 'other-project'
```

### A Quick Navigation Cheat Sheet

| What You Want to Do | macOS / Linux | Windows CMD | Windows PowerShell |
| --- | --- | --- | --- |
| See where you are | `pwd` | `cd` | `pwd` or `cd` |
| List files here | `ls` | `dir` | `ls` or `dir` |
| Go into a folder | `cd folder` | `cd folder` | `cd folder` |
| Go up one level | `cd ..` | `cd ..` | `cd ..` |
| Go to home | `cd ~` | `cd %USERPROFILE%` | `cd ~` |
| Go to a full path | `cd /full/path` | `cd C:\full\path` | `cd C:\full\path` |

## 🌲 A Real Project Directory Structure

Let's look at what a real-world web project directory might look like, and practice reading the paths inside it.

```plaintext
my-website/
│
├── index.html
├── about.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── reset.css
│   ├── js/
│   │   ├── main.js
│   │   └── utils.js
│   └── images/
│       ├── logo.png
│       ├── hero.jpg
│       └── icons/
│           ├── arrow.svg
│           └── close.svg
│
├── pages/
│   ├── blog/
│   │   ├── post-one.html
│   │   └── post-two.html
│   └── projects/
│       └── project-one.html
│
└── README.md
```

Let's practice reading paths within this structure.

**Scenario 1:** You're writing `index.html` and want to link the stylesheet.

```html
<link rel="stylesheet" href="./assets/css/styles.css">
```

`./assets/css/styles.css` - *"From* `index.html`*'s location, go into* `assets/`*, then* `css/`*, and find* `styles.css`*."*

**Scenario 2:** You're inside `pages/blog/post-one.html` and want to load `main.js`.

```html
<script src="../../assets/js/main.js"></script>
```

`../../assets/js/main.js` - *"Go up one level (out of* `blog/`*), go up another level (out of* `pages/`*), then go into* `assets/js/` *and find* `main.js`*."*

**Scenario 3:** You're inside `pages/projects/project-one.html` and you want to show the logo.

```html
<img src="../../assets/images/logo.png" alt="Logo">
```

`../../assets/images/logo.png` - *"Go up out of* `projects/`*, go up out of* `pages/`*, then into* `assets/images/` *and find* `logo.png`*."*

See the pattern? The deeper you are in the directory tree, the more `../` you need to climb back up before you can navigate sideways to where you need to go.

## 🪟 Windows-Specific Things You Need to Know

If you're a Windows user learning development, there are a few Windows-specific quirks that no one tells you about until they've already caused you a headache.

### 1\. Drive Letters and Switching Between Drives:

On Windows, if you're in the terminal and you want to navigate to a different drive (say, from `C:` to `D:`), just typing `cd D:\` won't work in Command Prompt. You have to type the drive letter and colon *separately* first:

```batch
D:
cd D:\Projects
```

Or in PowerShell:

```powershell
Set-Location D:\Projects
cd D:\Projects
```

### 2\. Windows File Explorer Shows You the Path:

Not sure what the full path to a folder is? In Windows File Explorer, click once in the **address bar at the top** of the window. The friendly breadcrumb display (`This PC > Documents > Projects`) will transform into the full actual path:

```plaintext
C:\Users\Yuchels\Documents\Projects
```

You can then copy this and use it in your terminal or code.

### 3\. Spaces in Paths Are a Bigger Problem on Windows:

Windows has notoriously path-unfriendly folder names out of the box. Things like `Program Files` and `My Documents` have spaces, and spaces in paths cause problems in the terminal because the shell interprets a space as the start of a new argument.

If you try to `cd` into a folder with spaces, you need to wrap the path in quotes:

```batch
cd "C:\Users\Yuchels\My Projects\Website"
```

This is one reason many Windows developers create a `C:\dev\` or `C:\projects\` folder at the root level.

### 4\. Forward Slashes Work in Most Modern Windows Tools:

Here's something that saves a lot of headaches: the majority of modern development tools on Windows - Node.js, Python, Git, VS Code's terminal, and PowerShell - accept forward slashes in paths, even though Windows natively uses backslashes.

So when you see tutorials writing paths like `./src/components/App.js`, you can use that syntax on Windows too. The forward slash convention is widely supported in development environments, which is why you'll see it used even in Windows-focused tutorials.

### 5\. Path Length Limits (Windows Only):

By default, Windows has a 260-character limit on the length of a full file path, a legacy limitation from the early days of the operating system. If you're working with deeply nested Node.js projects (with `node_modules` inside `node_modules` inside `node_modules`...), you can hit this limit.

If you see an error about path lengths being too long, you can disable this limit in Windows 10/11 by enabling "long paths" in Group Policy or the Registry. Alternatively, avoid nesting your projects too deeply.

## ⚠️ Common Mistakes That Will Definitely Happen to You:

### 1\. Relative path from the wrong starting point:

The most common beginner mistake. You're writing a relative path, but you're imagining the wrong "starting point." Remember: a relative path in an HTML file starts from *the location of that HTML file*, not from the root of your project or your computer.

If your HTML file is in `pages/blog/post-one.html` and your image is in `assets/images/photo.jpg`, the path is `../../assets/images/photo.jpg`, not `assets/images/photo.jpg`.

### 2\. Mixing up `/` and `\` in the wrong context:

Backslashes `\` belong in Windows paths. Forward slashes `/` belong everywhere else. If you're writing a path inside JavaScript, JSON, HTML, or CSS, even on Windows, use forward slashes. Backslashes inside strings in many programming languages are escape characters, meaning `\n` means "newline" and `\t` means "tab". A Windows path like `C:\new-folder` could accidentally be interpreted as `C:` + newline + `ew-folder`.

Always use forward slashes in your code, even on Windows.

### 3\. Case sensitivity:

This one causes a specific type of pain: your code works perfectly on your Windows machine, but it completely breaks the moment you deploy it to a server.

Here's why. Windows file paths are **case-insensitive**. `Portfolio`, `portfolio`, and `PORTFOLIO` all refer to the same folder. Linux file paths are **case-sensitive**. They are three completely different locations.

Since most web servers run Linux, if you've been writing `./Images/Logo.png` but the actual folder is called `images` and the file is `logo.png`, it'll work locally on Windows but 404 on your server.

**Rule of thumb:** Always use lowercase for file and folder names in your projects. No exceptions.

### 4\. Spaces in file and folder names:

`My Projects` with a space is a path nightmare in the terminal. You'd have to write:

```bash
cd "My Projects"
# or
cd My\ Projects
```

Just use hyphens or underscores: `my-projects` or `my_projects`. Every file and folder in a coding project should have no spaces. Start that habit now.

### 5\. Confusing the project root with the system root:

When developers say *"the root of the project"*, they mean the **top-level folder of your project**, not the system root (`/` or `C:\`). Context matters. *"Put it in the root"* during a coding tutorial means *"put it at the top level of this project folder."* They're not asking you to put it in `C:\` or `/`.

## 🛠️ The Complete Cross-Platform Reference Cheat Sheet

```plaintext
════════════════════════════════════════════════════════
  ROOTS
════════════════════════════════════════════════════════
  /                     → Root (macOS / Linux)
  C:\                   → Root, Drive C (Windows)
  D:\                   → Root, Drive D (Windows)

════════════════════════════════════════════════════════
  HOME DIRECTORY
════════════════════════════════════════════════════════
  ~                     → Home shortcut (macOS / Linux / PowerShell)
  /home/username/       → Home path (Linux)
  /Users/username/      → Home path (macOS)
  C:\Users\Username\     → Home path (Windows)
  %USERPROFILE%         → Home shortcut (Windows CMD)

════════════════════════════════════════════════════════
  RELATIVE PATH SYMBOLS
════════════════════════════════════════════════════════
  .                     → Current directory
  ..                    → Parent directory (one level up)
  ../..                 → Two levels up
  ./folder              → Subfolder of current directory
  ../folder             → Sibling folder (up one, then in)

════════════════════════════════════════════════════════
  PATH EXAMPLES
════════════════════════════════════════════════════════
  /home/user/file.txt           → Absolute (Linux)
  /Users/user/file.txt          → Absolute (macOS)
  C:\Users\User\file.txt         → Absolute (Windows)
  ./folder/file.txt             → Relative (current → folder)
  ../other/file.txt             → Relative (up one → other folder)

════════════════════════════════════════════════════════
  TERMINAL COMMANDS
════════════════════════════════════════════════════════
  pwd           → Where am I? (macOS / Linux / PowerShell)
  cd            → Where am I? (Windows CMD — no args)
  ls            → What's in here? (macOS / Linux / PowerShell)
  dir           → What's in here? (Windows CMD)
  cd folder     → Go into a folder (all platforms)
  cd ..         → Go up one level (all platforms)
  cd ~          → Go home (macOS / Linux / PowerShell)
  cd %USERPROFILE%  → Go home (Windows CMD)
```

## 🎯 Why This Actually Matters for Your Code

File paths aren't an abstract concept you learn and then forget. They're the invisible scaffolding that holds your entire codebase together.

They appear everywhere.

**In your HTML:**

```html
<link rel="stylesheet" href="./assets/css/styles.css">
<script src="./assets/js/main.js"></script>
<img src="./assets/images/logo.png" alt="Logo">
```

**In your JavaScript (Node.js imports):**

```javascript
const helpers = require('./utils/helpers');
import Button from '../components/Button';
```

**In your package.json and config files:**

```json
{
  "main": "./src/index.js",
  "scripts": {
    "build": "webpack --config ./config/webpack.prod.js"
  }
}
```

**In your terminal commands:**

```bash
node ./server/app.js
npm run build --prefix ./frontend
```

Every single one of those paths can be the source of a cryptic, maddening error if you don't have a solid mental model of what they mean.

The good news? Once you do have that mental model, once you can look at `../../assets/images/logo.png` and immediately trace the route in your head, a whole category of bugs stops being mysterious. You see the problem immediately. *"Oh, that file's three levels up, not two."*

## 🔜 What's Next?

Now that you understand how files are organised, addressed, and navigated, the next step is to learn to **create, move, copy, and delete files and directories from the terminal,** with no mouse required.

I already have an article written for that titled, "The Terminal for Beginners". It will help you fully utilize your terminal and reduce the number of clicks you make on your system.