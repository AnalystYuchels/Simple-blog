---
title: "Every App You Love Is Secretly Talking to Another One"
seoTitle: "What is an API?"
seoDescription: "Never quite understood what an API is? This beginner-friendly guide explains APIs using real-life examples that are totally relatable."
datePublished: 2026-05-25T12:43:20.546Z
cuid: cmpl763xb00ad2cjvfqh6gyq5
slug: every-app-you-love-is-secretly-talking-to-another-one
cover: https://cdn.hashnode.com/uploads/covers/69a84cffe55311e40f053e5f/dd956421-3081-41d7-ab8d-73f5a07463fa.svg
tags: programming-blogs, api, javascript, webdev, beginners, codenewbies

---

Have you ever wondered how the weather app on your phone knows it's going to rain tomorrow? Or how Spotify can let you log in with your Google account without Spotify ever knowing your Google password? Or even how an e-commerce site knows in real-time whether your card payment went through?

None of those things happens by magic. They happen because of something called an **API**.

If you've been in tech spaces for any amount of time, or even just read a few job descriptions, you've seen the word "API" thrown around like everyone already knows what it means. It's one of those terms that people rarely explain, because they assume you'll pick it up along the way or look it up yourself.

## Picture This Scenario

Imagine you've just arrived in a city you've never visited before. You're hungry, so you walk into a restaurant. You sit down, pick up the menu, and when you're ready, you flag down a waiter.

You tell the waiter: *"I'd like the jollof rice with fried plantain and turkey, please."*

The waiter nods, disappears into the kitchen, and returns with your food a few minutes later.

Now, here's what you *didn't* do: you didn't walk into the kitchen yourself. You didn't grab a pot, locate the gas cooker, or negotiate directly with the chef over how much oil to use. You didn't need to know any of that. You just placed an order and received exactly what you asked for.

In this story, the waiter is an API.

An **API**, which stands for *Application Programming Interface*, is the middleman that lets two pieces of software communicate without either side needing to know how the other works internally.

## Breaking Down the Name

Let's take the three words apart slowly, because the name itself is more helpful than it first appears.

**Application**: This refers to any software program. Your Instagram app is an application. The Google Maps service is an application. A payment processing system like Paystack is an application.

**Programming**: This just means it's designed to be used in code. You don't interact with it the way a regular user clicks buttons in an interface; instead, another program interacts with it by sending instructions.

**Interface**: An interface is a point of connection. Your TV remote is an interface between you and the television. A keyboard is an interface between you and your computer. An API is the interface between two applications.

In very simple terms, an API is **a defined way for one application to talk to another through code**.

## The Restaurant Is Everywhere

Once you see the restaurant analogy, you start seeing it everywhere.

Think about the last time you booked a flight using a travel website like Booking.com or Google Flights. That website doesn't *own* the flight data. It doesn't have servers inside Ethiopian Airlines or Qatar Airways. What it has is access to those airlines' APIs.

When you search for "Lagos to London, next Friday," the travel site sends a request through each airline's API, essentially asking, *"Do you have available flights on this route on this date?"* and the airline's system sends back a response with prices, times, and seat availability. The travel website then displays that data to you, often comparing dozens of airlines at once.

You never interacted with the airline's raw systems. The airline never handed over its entire database. The API handled the conversation in between.

## A More Technical Look

Now that the concept is clear, let's look at what actually happens when an API is called.

When one application wants something from another, it sends what's called an **API request**. That request has a few important parts:

**The endpoint**: the specific address of the thing you're asking for. Think of it like a specific shelf in a library. You don't ask for "the whole library", you ask for a particular section.

For example, a weather API might have an endpoint that looks like this:

```plaintext
https://api.weather.com/v1/forecast
```

That specific URL leads to the forecast data. A different endpoint in the same API might lead to historical weather or UV index readings.

**The method**: This specifies the kind of action you want the API to perform. The most common ones are:

*   `GET` - *"Give me some information."* (like looking up the weather)
    
*   `POST` - *"Here's some new information, please save it."* (like creating an account)
    
*   `PUT` or `PATCH` - *"Here's an update to existing information."* (like editing your profile)
    
*   `DELETE` - *"Remove this thing."* (like deleting a post)
    

**The response**: Once the receiving application processes your request, it sends back a response. This response usually includes a **status code** (a short number indicating whether things went well) and the **data** you requested.

You've probably seen status codes without realising what they were:

*   **200** means everything went fine.
    
*   **404** means the thing you asked for wasn't found.
    
*   **500** means something went wrong on the server's side.
    

The data that comes back is usually formatted as **JSON** (pronounced "Jason"), which is just a structured, text-based way of organising information that both machines and humans can read.

Here's a tiny example of what a weather API might send back:

```json
{
  "city": "Lagos",
  "temperature": 32,
  "condition": "Partly cloudy",
  "humidity": 78
}
```

Your app receives this, pulls out what it needs, and displays it to the user.

## Real Life Is Full of APIs

Let me run through a few everyday scenarios that are secretly powered by APIs. After this, you'll start noticing them everywhere.

### "Sign in with Google"

You're signing up for a new tool, let's say a project management app. Instead of filling in a new username and password, you click "Sign in with Google."

What happens next? The project management app uses **Google's OAuth API** to ask Google, *"Can you confirm who this person is, and give me permission to verify them?"*

Google asks you if you're okay with this. You click "Allow." Google sends a secure token back to the project management app to confirm your identity. The app logs you in. Your Google password never left Google, nor did the app ever see it.

### The Uber You Just Booked

When you open Uber and see a little car icon moving toward you on a map, you're looking at multiple APIs at work simultaneously.

The map itself is likely Google Maps' API or Mapbox's API; Uber is renting access to map data rather than building its own maps from scratch. The driver's real-time location is being sent through a location API. When you get charged after your ride, the transaction goes through a payment processing API such as Stripe or Flutterwave.

### The Exchange Rate on That Online Store

Ever visited an online store that shows prices in your local currency? They're not manually updating those prices every morning. They're querying a **currency exchange rate API** that provides live data on conversion rates and displaying the results in real time.

### That Chatbot on a Website

If you've ever interacted with a chatbot that actually seemed intelligent, not just a dropdown menu of options, there's a good chance the website is sending your message via an API to a service like OpenAI or Anthropic, receiving a response, and displaying it to you. The website itself isn't "smart." It's borrowing intelligence through an API.

## Why Do APIs Exist in the First Place?

At this point, you might be wondering: *Why go through a middleman at all? Why not just give apps direct access to each other's data?*

That is a great question. The answer comes down to three things: **security**, **efficiency**, and **control**.

**Security.** If every app that wanted your bank balance needed direct access to your bank's entire database, the consequences of a single breach would be catastrophic. APIs let the bank expose only specific, controlled information, your balance, and recent transactions, without opening up anything else.

**Efficiency.** Why build your own maps when Google has already built the best ones? Why create your own payment infrastructure when Flutterwave already handles that flawlessly? APIs let developers stand on the shoulders of giants instead of reinventing the wheel.

**Control.** APIs let the company that offers the data set its own rules. They can say: *"You can make 100 requests per minute, but not 10,000. You can read this data, but you cannot modify it. You need an API key to access this."* That control protects their systems and business model.

## Public APIs vs Private APIs

Not all APIs are created equal. There are a few categories worth knowing about:

**Public APIs** (also called Open APIs) are available for anyone to use. The developer signs up, gets an API key, and can start building. OpenWeatherMap, NewsAPI, and many government data APIs are good examples.

**Private APIs** are for internal use only. Large companies build APIs so their own teams and products can share data efficiently. If you work at a company with multiple products, there's likely an internal API that lets those products share user information, analytics, or content.

**Partner APIs** are shared among specific businesses with a formal agreement. If a payment processor works with a specific set of e-commerce platforms, they might have a partner API that gives those platforms extra functionality or a better rate.

**Third-party APIs** are simply APIs built by an external company that you integrate into your product. When you use Google Maps or Paystack in your app, you're using third-party APIs.

## What's an API Key, and Why Do They Ask for One?

If you've ever tried to use a public API, you've probably noticed that they ask you to sign up and get an **API key** before you can do anything.

An API key is basically a password for your application. It's a long string of characters (like `sk-9fXm3...vQ7Z`) that identifies *who* is making the request.

It serves two purposes: **authentication** (proving you're allowed to use this API at all) and **tracking** (so the API provider knows how many requests you're making, and can charge you accordingly if you go over a limit).

This is why you should *never* put your API key in public code, like pushing it to GitHub, because anyone who finds it can use the API as if they were you, and you'd be the one billed for their usage.

## The API Is Not the Data

Here's something that trips people up: **an API is not the data itself. It's the door to the data.**

Think of it this way. A library has books (the data). The catalogue system, the way you search for books, request them, and check them out, is the API. The catalogue doesn't contain the books. It just gives you a structured, controlled way to find and access them.

When people say "I used the Twitter API," they don't mean they have Twitter's entire database. They mean they used the door Twitter created, which let them fetch specific types of data, recent tweets, user profiles, trending topics, in a structured way, within whatever limits Twitter set.

## So What Can You Build With APIs?

Once you understand that APIs are essentially bridges between systems, the question becomes: *what do you want to connect?*

*   You could build a **productivity tool** that pulls your tasks from Notion, checks your calendar via Google Calendar API, and sends you a morning summary over WhatsApp via the WhatsApp Business API.
    
*   You could build a **personal finance tracker** that connects to your bank's open banking API and automatically categorises your spending.
    
*   You could build a **news aggregator** that pulls headlines from five different news APIs, filters them by keywords you care about, and displays them in a clean feed.
    
*   You could add **real-time translation** to your app using the Google Translate API, without knowing a single thing about how machine translation works internally.
    

APIs are why solo developers and small teams can build incredibly powerful products today. You don't need to build everything from scratch. You assemble the best tools available and connect them.

## API Terms at a Glance

| Term | What it means |
| --- | --- |
| API | A defined way for two applications to communicate |
| Endpoint | A specific URL that points to a particular resource |
| Request | What your app sends to the API |
| Response | What the API sends back |
| GET | Fetch/read data |
| POST | Send/create new data |
| Status 200 | Success - everything went fine |
| Status 404 | Not found |
| Status 500 | Server error |
| JSON | A structured text format for sending data |
| API Key | A unique identifier that authorises your app to use an API |
| REST API | The most common style of API architecture |