# Beginner Javascript 2

---

### Table of Contents
---

1. The DOM
2. XML
3. SVG
4. HTML
5. Tags
6. What the DOM does to your HTML
7. Cascading Stylesheets
8. IDs and Classes
9. IDs
10. Classes
11. JavaScript DOM Interaction
12. Query Selectors
13. jQuery
14. AJAX
15. HTTP
16. XHR

---

### The DOM
---
### The Document Object Model

---

### What is it?

- Just a **conventional representation** of your document created by the browser 

- Convention extends to HTML, XML, and by extension SVG (in XML format)

---

### XML
---
### Extesnible Markup Language
 
- Designed for data interchange

- Less favorable than JSON because of its verbosity

[Example: Image]

---

### SVG 
---
### Scalable Vector Graphics

- Written in XML format

- Renders graphics based on vector quantities that don't lose quality when resized

[Example: Image]

---

### HTML
---
### Hypertext Markup Language

---

### What does the name mean?

- **Hypertext**: text which links to other text

- **Markup**: document annotation and formatting

---

### Tags

- Keywords which denote the structure of a document

- Parsed into the DOM and are stored internally

- Can hold attributes

[Example: Image]

---

### What the DOM does to your HTML

- How your document is represted and interacted with is based on the DOM, not the original document!

- This parsing process implemented because people are bad at coding

- Cleans up and standardizes the 'tag soup' to provide a valid model

[Example: Show how the browser changes submitted html]

---

### CSS
---
### Cascading Style Sheets

---

- Defines presentation of a document, how it will be rendered

- Looks at and acts on element references throughout the dom

- How to specify which element? CSS can look at it's element name or...

[Example: Style a div]

---

### IDs and Classes

- ... it's attributes!

- Within the dom elements carry around attributes which distinguish each other or carry data

- They can be selected for!

---

### IDs

- **ID** "id" attribute in HTML elements

- written with a # in style sheets

- represent a single, specific instance of an element with a special role or job

- convention dictates **there can only be one!**

---

### Classes

- **Classes** "class" attribute in HTML elements

- represents a category of elements with certain jobs

- you can make plenty of these!

[Example: Make some ID's & Classes]

---

### JavaScript DOM Interaction

[Example: The DOM Tree]

---

### The 'window' object

- Reference to the window itself!

---

### The 'document' object

- A reference to the document loaded into the browser

- This is where the majority of interactivity happens

---

### JavaScript DOM Interaction

- Both of these references and the majority of their methods provided by the DOM!

- When JavaScript creates an execution context, it creates a reference to a global object

---

### JavaScript DOM Interaction

- Within browsers, that ends up being window, but that doesn't always have to be the case!

- When JavaScript is run outside of the browser (for example in node) something else is used in that environment

---

### Query Selectors

document.querySelector(".cssSelector");

- An example of a method provided by the DOM

- Performs a fundamental task of returning a reference to an HTML element

- Can be assigned to local references in javascript using the 'var' keyword

[Example: Query Manipulation]

---

### jQuery

---

### What is it?

- A lightweight JavaScript library

- Simplifies alot of the common use-cases of JavaScript

- Very extensible, has been designed to work across all major browsers

---

### AJAX
---
### Asynchronous JavaScript and XML

---

### What is it?

- It is just an approach to make fast responsive user interfaces.

- Involves all above mentioned technologies and the very important **XMLHTTPRequest Object**.

- Makes small updates to subsections of the page without refreshing the entire thing.

---

### Why is it 'asynchronous'?

- Client and server run independantly of each other.

- The browser doesn't freeze until response is recieved from the server.

- Following a call, control is returned immediately to you as the user.

- But never forget: JavaScript itself is **synchronous**.

---

### HTTP
---
### Hypertext Transfer Protocol

---

### What is it?

- **Protocol** Agreed upon format for data exhange between two parties

- Determines how data is transmitted and how servers and browsers are meant to handle it

- Involves a series of request and response actions

##### Example

GET /foo.htm HTTP/1.1     (This is the Client Request-Line)

HTTP/1.1 200 OK           (This is Server Status-Line)

---

### XHR
---
### XMLHTTPRequest

---

### What is it?

- A JavaScript object that provides a way to retrieve piece of a data

- Can be used to retrieve any type of data, not just XML

- It allows for you to update just a part of your page without doing a full refresh

- Involved heavily in AJAX programming

---

### Citations


