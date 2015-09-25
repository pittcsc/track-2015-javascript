# Beginner Javascript 2

---

## Outline
- The browser DOM
- HTML
- CSS
- JavaScript DOM interactions and jQuery
- Client-side XMLHTTP requests (xhr)

---

### The DOM
---
### The Document Object Model

---

### What is it?

- Just a **convention** which standardizes how documents are meant to be represented and interacted with

- Convention extends to HTML, XML, and by extension SVG (in XML format)

---

### XML
---
### Extesnible Markup Language
 
- Designed for data interchange

- Less favorable than JSON because of its verbosity

[Example]

---

### SVG 
---
### Scalable Vector Graphics

- Written in XML format

- Renders graphics based on vector quantities that don't lose quality when resized

[Example]

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

[Example]

---

### What the DOM does to your HTML

- How your document is represted and interacted with is based on the DOM, not the original document!

- This parsing process implemented because people are bad at coding

- Cleans up and standardizes the 'tag soup' to provide a valid model

[Live Coding! (Differences between document and internal representation)]
https://css-tricks.com/dom/

---

### CSS
---
### Cascading Style Sheets

---

- Defines presentation of a document, how it will be rendered
- Looks at and acts on element references throughout the dom

[Live Coding! (Basic styling!)]

- How to specify which element? CSS can look at it's element name or...

---

### IDs and Classes

- ... it's attributes!
- Within the dom elements carry around attribues which distinguish each other or carry data
- They can be selected for!

---

### IDs and Classes (2)

- **ID** "id" attribute in HTML elements
- written with a # in style sheets
- represent a single, specific instance of an element with a special role or job
- convention dictates **there can only be one!**
- **Classes** "class" attribute in HTML elements
- represents a category of elements with certain jobs
- you can make plenty of these!

[Live Coding! (More styling!)]

* show examples of what to use id's and classes for
---

### JavaScript DOM interaction

* emphasize the DOM's representation of the document
* organized as a tree of nodes
* where nodes can be anything, elements, attributes, hrefs, blah

- The window object
	- Reference to the window itself!
	- Can be used to edit the very boundaries of space! (on a 2D plane)
- The document object
	- A reference to the document loaded into the browser
	- This is where the majority of interactivity happens
- Both of these references and the majority of their methods provided by the DOM!

- When JavaScript creates an execution context, it creates a reference to a global object
- Within browsers, that ends up being window, but that doesn't always have to be the case!
- When JavaScript is run outside of the browser (for example in node) something else is used in that environment

---

### Query selectors
- An example of a method provided by the DOM
- performs the fundamental task of returning a reference to an HTML element
- can be assigned to local references in javascript using the 'var' keyword

[Hot hot live coding!]
**Show how the engine still returns object references in the console even with a blank javascript file

**Show how to select and manipulate a DOM element through it's reference

---

### jQuery

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

### Client-side HTTP requests

---

### XMLHTTPRequest


- CORS

---

### Citations


