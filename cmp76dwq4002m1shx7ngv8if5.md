---
title: "How the Internet Works: DNS, HTTP & Servers Explained"
seoTitle: "How the Internet Works: DNS, HTTP and Servers Explained f"
seoDescription: "Ever wondered what actually happens when you type a URL? This beginner-friendly guide properly breaks down DNS, HTTP requests, and servers."
datePublished: 2026-05-15T17:12:38.385Z
cuid: cmp76dwq4002m1shx7ngv8if5
slug: how-the-internet-works-dns-http-servers-explained
canonical: https://analystyuchels.hashnode.dev/how-the-internet-works-dns-http-servers-explained
cover: https://cdn.hashnode.com/uploads/covers/69a84cffe55311e40f053e5f/66a8dafe-232d-4e4e-84e0-f65cc65adcbd.svg
tags: javascript, webdev, beginners, networking, codenewbies

---

You've been using the internet your whole life. All you do is type something into a browser, press Enter, and boom! A webpage appears.

But then you start learning a tech course like web development, and suddenly people are throwing words like *DNS*, *HTTP request*, *origin server*, and *status codes* at you like you're supposed to just magically know what those mean.

Nobody might have told or taught you this stuff in a way you would understand or even at all, so let me. But I'm not going to start with definitions that will bamboozle you more. I'm going to start with a simple and maybe relatable story.

## Tunde's Order

It's a Friday evening, and Tunde has been staring at his laptop all day learning to code, and he's hungry. He picks up his phone, opens a food delivery app, and types in the name of a popular restaurant. He clicks on *Search*.

Now, here's what Tunde doesn't think about in that moment: His phone has no idea where to send that request. The app knows the restaurant's name: *"Mama Caro's Kitchen."* But phones don't deliver food to names. They need an address. A real, physical location.

So his phone does something quietly in the background. It calls a middleman, someone who keeps a giant directory of every business name and its corresponding address. This middleman looks up *"Mama Caro's Kitchen"* and replies:

> *"That's at 14 Allen Avenue, third building on your left."*

Now the phone knows exactly where to send the order. **That middleman is called the DNS.**

## DNS: The Internet's Address Directory

Here's the real version: every website on the internet lives on a computer, a **server**, and every server has a numerical address called an **IP address**. It looks something like `142.250.74.14`.

Computers love IP addresses because they're precise and routeable. Humans, however, hate them. Nobody wants to remember `142.250.74.14` every time they want to visit Google.

That's why we use domain names that are readable words, like `google.com`. But your computer still needs the IP address underneath.

**DNS (Domain Name System)** is the system that translates the name into numbers. When you type `www.example.com`, your browser quietly asks a DNS server: *"What's the IP address for this domain?"* The DNS server looks it up and replies with the number. Your browser then uses that number to connect.

This process is called a **DNS resolution**, and it happens in milliseconds.

### The lookup chain

Your computer doesn't always ask the same DNS server. It checks in order:

1.  **Your browser's cache**: *"Have I looked this up recently? Do I remember?"*
    
2.  **Your OS's cache**: *"Does my computer already know?"*
    
3.  **Your ISP's DNS resolver**: *"Let me ask my internet provider."*
    
4.  **Authoritative name servers**: *"Let me ask the official record-keeper for this domain."*
    

Most of the time, steps 1 or 2 are enough. If it is a brand new site, however, it might go all the way to step 4.

> 💡 **One sentence version:**
> 
> DNS translates human-friendly names (like `google.com`) into machine-friendly numbers (like `142.250.74.14`).

## Back to Tunde (Now the Order Gets Placed)

Now Tunde's phone has the address. It knows where Mama Caro's Kitchen is. He needs to actually *place the order* for his food. His phone will send a structured message, a properly formatted request that the restaurant's system can read and understand. The message says:

*   **What I want:** jollof rice, fried plantain, turkey, and one Malt
    
*   **How I'm paying:** transfer on delivery
    
*   **Where to deliver:** my location
    
*   **What kind of request is this:** a new order
    

The restaurant's system receives it, processes it, and sends back a confirmation:

> *"Order received. Estimated delivery: 35 minutes."*

That entire back-and-forth, the structured request, and the structured response, **that's HTTP**.

## HTTP: The Language Browsers and Servers Speak

**HTTP** stands for **HyperText Transfer Protocol**. Strip away the technical name, and it's just: *the agreed-upon format for asking and answering on the web.*

### HTTP Requests:

When your browser wants a webpage, it sends an HTTP **request**. The request contains:

*   **What you want** - e.g., the homepage, an image, some JSON data
    
*   **The method** - *how* you're asking (just fetching? submitting a form? deleting something?)
    
*   **Headers** - extra context, like your browser type, cookies, and accepted formats
    

Here are the main HTTP methods:

| Method | What it does | Real-world analogy |
| --- | --- | --- |
| `GET` | Fetch/read data | Asking to see the menu |
| `POST` | Send new data | Placing a new order |
| `PUT` | Replace existing data | Swapping your entire order |
| `PATCH` | Update part of existing data | Changing just your drink |
| `DELETE` | Remove data | Cancelling the order |

As a beginner, you'll most likely work more with `GET` (loading pages, fetching data) and `POST` (submitting forms, creating accounts).

### HTTP Responses:

Once the server processes your request, it sends back an HTTP **response**. This includes:

*   **The content**: HTML, CSS, images, JSON, whatever you asked for
    
*   **A status code**: a number that tells you how it went
    

### Status codes:

| Code range | Meaning | Common example |
| --- | --- | --- |
| `2xx` | ✅ Success | `200 OK` - all good, here's your content |
| `3xx` | 🔄 Redirect | `301 Moved Permanently` - it lives at a new URL now |
| `4xx` | ❌ Your fault | `404 Not Found` - that page doesn't exist |
| `5xx` | 💥 Server's fault | `500 Internal Server Error` - something broke on their end |

`200 OK` is what you want. It's the server saying, *"Got it, here you go."*

`404`? That's when you ask for something that doesn't exist, like ordering a dish that's not on the menu.

`500`? That's when the kitchen catches fire. Their problem, not yours.

> 💡 **One sentence version:**
> 
> HTTP is a structured conversation. Your browser asks (request), the server answers (response), and the status code tells you whether everything went well.

## The Server Is Just a Kitchen

Back to Tunde. His phone sent the order, and Mama Caro's system received it. Someone in the back is now cooking.

That kitchen, always open, always ready to receive orders, and designed to handle many requests at once, is **a server.**

A **server** is just a computer that is:

*   Always on
    
*   Connected to the internet
    
*   Set up to listen for and respond to requests
    

Your laptop *could* technically be a server. The difference is that real web servers live in large, climate-controlled buildings called **data centres**, which are connected to extremely fast, redundant internet links and are optimised to handle thousands (or millions) of requests per second.

When you "visit a website," you're really asking a server computer: *"Please send me the files that make up this page."* And it does exactly that.

### Static vs. Dynamic content:

Here's a distinction worth knowing early:

**Static content** is pre-made. The files sit on the server exactly as they'll be delivered, like a buka that preps all their swallow in the morning and just dishes it out as orders come in.

**Dynamic content** is generated on the spot. When you open Twitter and see *your* timeline, a server is building that page from scratch, based on your account, who you follow, and what's most recent. Like a restaurant that cooks each meal to order.

Most modern websites are a mix of both.

## The Full Journey

Here's everything, from the moment you type a URL and hit Enter, all the way to a page appearing on your screen:

```plaintext
1. DNS resolution
   Your browser asks: "What's the IP address for this domain?"
   DNS responds: "It's 93.184.216.34"

2. HTTP request
   Your browser sends a GET request to 93.184.216.34:
   "Please send me the homepage."

3. Server processes the request
   Might fetch data from a database, might just grab a file.
   Depends on whether the content is static or dynamic.

4. HTTP response
   Status: 200 OK
   Body: here is the HTML for the page

5. Browser renders
   Reads the HTML, finds it needs CSS and images,
   sends more GET requests for those too.
   Eventually, the full page appears.
```

The whole process, from step 1 to step 5, typically takes under a second.

## One More Thing: HTTPS

You've noticed that websites use `https://` not just `http://`. That S stands for **Secure**.

Plain HTTP sends data as readable text. If someone intercepted the traffic between your browser and the server, they could read it, including your passwords, personal details, and everything.

HTTPS encrypts the conversation using a system called **TLS (Transport Layer Security)**. It's the difference between sending a postcard (anyone who handles it can read it) and sending a sealed, tamper-proof envelope.

When Tunde sends his card details to pay for that jollof rice, he wants HTTPS. Every serious website uses it. Browsers now show warnings when a site doesn't.