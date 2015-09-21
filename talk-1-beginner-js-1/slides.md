# Beginner Javascript 1

---

## Intro to the 2015 JavaScript track

---

## Who am I?

### JJ Naughton
- Full-stack web developer
- Software Engineer Intern at PayPal (Node)
- @vonbearshark
- Contact me with any questions. Or check out the #javascript-track channel on Slack.

Note: I interned at PayPal, which is converting to near-100% JavaScript; likewise, I've been working with JS for years now. Anyone else who feels like they could get up here and do this, come see me or Nicole after. We have already had a few club members come forward to help with talks, and they will be coming up. It really doesn't take much authority; we will make sure you're able to present.

----

- The kind of incisive commentary you can expect:
![Tweet Screenshot](/tweetscreen.png?raw=true "JavaScript lol")

---

### Structure
- Weekly presentations on the JavaScript language every meeting, with practical application workshops later in the year.
- We hope to appeal to varying experience-levels.

Note: Since the University of Pittsburgh does not cover JavaScript (or, arguably, web development) in-depth, we're going to err on the side of inexperience, and attempt to move from 0-experience to modern web development, such that members who attend all talk will be able to fruitfully build non-trivial projects.

----

### Scope
- By the end of this track, you will be able to build isomorphic JavaScript web applications, both on the client and server, and interact with JSON-like document-oriented databses, such as MongoDB.

----

### Roadmap
- Intro
- Basics I
- Basics II
- Advanced I
- Advanced II
- Compile-to and Next-Gen JS
- Functional Programming in JS
- JS in practice: tooling, client, and server
- Workshops: Angular, Ember, NodeJS

Note: We provide a roadmap for the track, allowing members to selectively attend sessions based on interest, schedule, etc. Still, it should be mentioned that many of the presentations, especially the language presentations, will be the foundation for future presentations and workshops.

---

### What is this JavaScript?
- JavaScript is high-level, dynamic, and un-typed.
- Historically, JavaScript is an interpretted web-based scripting language.
- Today: JS can accurately be called: imperative, object-oriented, prototypal, and functional, depending on its use, as it supports all of these paradigms.
- Different implemenations treat JavaScript differently (V8 compiles to native code, Rhino compiles to Java bytecode, and Mozilla's engines use a JIT)

Note: Of course, it is not purely any of the above. Truthfully, it is a mixed bag of all of the above. It can be used on the server with the Node runtime, it can be functional or object-oriented (especially with new es6 sytntax sugars; although it more), etc.

----

### !JavaScript
- JavaScript is to Java what car is to carpet.
- It is also not Lisp, nor is it simply a scripting language.

Note: Though the name is confusing, JavaScript (which, to be fair, goes by many names), JavaScript has nothing to do with Java. It is also not really a "script"-ing language, or rather not just a scripting language (anymore).

---

### History of JavaScript
- Javascript created in a little over a week by Brendan Eich at Netscape (now Mozilla).
- Now governed by Ecma, a membership committee for JS standards.
- Formerly in competition for web application share with things like Flash and Java applets.
- It has seriously evolved from its origin purpose of browser DOM interaction.

Note: Some would say it has outgrown its purpose of "making the monkey dance". It now operates servers and powers entire single-page applications. So there's a good chance you'll need to deal with it at some point.

---

### Variations
- JS implementations vary based on the given environment (browsers-to-browser, ECMAScript 5 v. NodeJS, etc.).
- But all implement core features.
- Runtimes are likewise varied.
- Later in the track will also visit a number of language that can expand and compile to JavaScript (CoffeScript, TypeScript, ClosureScript)

Note: There's a lot of more formal names to JavaScript (i.e. ECMAScript 2015 v. EMCAScript 5i, LiveScript, Node, etc.), but we will always call it "JavaScript" to avoid confusion.

---

### Why not use JavaScript
- Quirky language
  - `1 == "1" //true`
  - `typeof NaN //number`
  - `0.1 + 0.2 == 0.3 //false`
- Dynamic and generally not compiled (so not usually performant)
- Single-threaded
- No type safety

Note: JS is single-threaded, but it is also asynchronous, so it may be faster in certain functions, such as a web server. Also, some JS implementations have an optional type systems, i.e. Typescript.  There's No safety at all, really, and it's really easy to shoot yourself in the foot. There's a lot of bad JavaScript code out there.

---

### Why use JavaScript
- JS engines are generally more performant than other popular interpretted languages.
- Community is enormous and thriving. (with lots of corporate support.)
- JS is flexible and lends itself to quick iterations.
- Ubiquitous, for better collaboration among disciplines.
- There is no other choice for frontend web scripting*.

Note: JS is mostly faster and more scalable than, say, Python or Ruby. JS allows people from all walks of the product to collaborate with less overhead. Many companies are moving now to Node backends, too (PayPal, for example). *This isn't entirely true. Dart, by Google, works in Chrome at least, and there are efforts underway for a web assembly language to offer more compilation targets. Neither has much traction, and, at any rate, JS will likely reign in the foreseeable future.

---

### Cool projects that use JavaScript

> Atwood's Law: any application that can be written in JavaScript, will eventually be written in JavaScript. (via @codinghorror)

- [ThreeJS](http://threejs.org/) and [BabylonJS](http://www.babylonjs.com/)
- [Johnny-fives](https://github.com/rwaldron/johnny-five)
- [NodeOS](https://node-os.com/)
- [NodeJS](https://nodejs.org/en/)
- Frontend frameworks like [AngularJS](https://angularjs.org/), [Backbone.js](http://backbonejs.org/), and [Ember](http://emberjs.com/)
- This presentation! (via [Reveal.js](http://lab.hakim.se/reveal-js/#/))

Note: And Chrome extensions!

----

### Cool projects that use JavaScript: Three.js Examples

- [Gorescript](http://timeinvariant.github.io/gorescript/play/)
- [Voxel](http://maxogden.github.io/voxel-perlin-terrain/)

---

### Try it out
- In your browser, open up the console and type:
```
console.log('Hello world!');
```

Note: For Chrome, you can open up your browser with ctrl + shift + j, with Firefox, it's ctrl + shift + i (and for IE you can probably type `install firefox` into your web browser).

---

## JavaScript syntax and basics
- JavaScript is a dynamically typed language, meaning you don't need to specifiy type on definition.
- In fact, there is only one variable type: `var`
- Likewise, variables may be assigned to multiple different types.
- Still, there is an underlying type and type-coercion system.

Note: So, again, there are no explicit types in JavaScript, only implicit ones. This can lead to a lot of confusion, so we are going to spend this presentation going over this. It can be boring, but it is the foundation of the talks to follow.

---

### JavaScript syntax and basics: Types: Numbers
- No such thing as an primitive integer
- For example:  `var  value = 0.1 + 0.20; // value = 30000000000000004`
- NaN (Not a Number) is, ironically, a type of number
  - It can be used to evaluate number types using `.isNaN` or the `typeof` keyword
- JavaScript also has the unique `Infinity` and `-Infinity` number types

----

- JavaScript supports the usual arithmitic operators:
  - `+`: Addition
  - `-`: Subtraction
  - `*`: Multiplication
  - `%`: Modulo or Remainder
  - `**`: Exponent

----

- The Math library is also available for more complicated oprations and constants, such as:
  - `Math.PI`: PI
  - `Math.ceil()`: Next largest integer
  - `Math.random()`: psuedo-random number generator

----

- 0 and NaN are falsy, while any non-0 number is truthy
- Be very careful when mathing-ing in JavaScript, especially when working with Strings
  - `parseInt()` can be used to coerce Strings to Numbers
- The `Integer` object presents more opportunities math, as well as representations (binary, decimal, octal, hexidecimal, etc.)

---

### JavaScript syntax and basics: Types: Strings
- Strings are arrays of Unicode characters
- Strings come with built-in methods, such as `.toUpperCase()` and `.toLowerCase()`, `.charAt()`, and properties, including `.length`
- Example:  `var message = "hello".length; //message = 5`

---

### JavaScript syntax and basics: Types: Booleans
- The Boolean type has two literal values: `true` and `false`

---

### JavaScript syntax and basics: Object Types: Objects
- Full disclosure: Nearly everything is an object in JavaScript
- An object in JavaScript is simply a hashmap with key-value pairs. A key is always a string, and a value can be any of the aforementioned types.
- Objects can be defined in a number of different ways:
    - Object literal: `var obj = {key: 'value'};`
    - The `new` keyword: `new Object(parameters);`

----

- Object key-value pairs can be access with both dot and bracket notation. Ex: `Foo.bar` and `Foo[bar]`
- By default JavaScript does comparisons by reference. In order to properly deeply evaluate two objects, use some deep comparison.
- A quick hack is to use `JSON.stringify()` to coerce the objects into strings and compare that way. This does not accomodate ordering or coerced values (i.e. `null` and `undefined` will not be equal).
- We'll visit objects more in-depth later when we go over prototypal inheritence.
- JSON: JavaScript Object Notation; used for web communication.

---

### JavaScript syntax and basics: Object Types: Functions
- A function definition:
```
    function myFunctionName(parameters) {
        console.log(parameters); //body
        return parameters; //optional
    }
```
- Primitives parameters are passed by value, but object types are passed by references.
- This mean that primitive values will not be altered outside of the function scope, while passed object types will.

----

### Functions as objects
- Because Functions are Objects in JavaScript, Functions can have inner properties and functions
- We'll visit those when we review Closures and prototypal inheritence

----

### Annonymous Functions
- Annonymous functions can be assigned to variables. For example:
```
var myFunct = function (param1) {
    console.log(param1);
};
```
- You can then call this function with `myFunct('Ive been summoned'); //'Ive been summoned'`
- Wrapping an annonymous function in parenthesis calls the function immediately. So:
```
(function() {
    console.log('Ill be called asap');
})
```
- Annonymous functions can also be passed as parameters themselves. These are called first-call functions, and are useful to asynchronous callbacks and map/reduce functions, but we will talk about that in another presentation.

---

### JavaScript syntax and basics: Object Types: Arrays
- When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.
- Arrays in JavaScript are more like lists; they can contain values of various types:
`var myArray = ['string', 5, null];`
- As objects, arrays are evaluated by reference, so you will need to deeply compare the array, or use the `JSON.stringify()` hack.

Note: You'll likely look up how to declare a new array every time you need to.

---

### JavaScript syntax and basics: Other Object Types
- RegExp and Date
    - Regular Expressions find character patterns in strings based on rules..
    - Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
- `null` and `undefined`
    - Though they differ slightly, `null` and `undefined` signify non-existent objects
    - `undefined` is not a type of function
    - Both coerce to `false`.

---

### JavaScript syntax and basics: Control Structures
- `if` `else if`, `else`, `switch`
- All types can be coerced to a boolean value.
- For example: `''`, `null`, `0`, `undefined`, and `NaN` coerce to `false`
- All other values coerce to `true` (including `[]` and `{}`)
- So:
```
if([]) {
    console.log('This will execute!');
}
else if ('') {
    console..lg('This won\'t!');
}
```

Note: We talked about type coercion, and here is a common usecase.

----

### Try/Catch
- `try`/`catch` blocks exist in JavaScript
- Likewise, it is possible to `throw` expressions
- But none are used often
- Promises allow for the control of asynchronous operations, but we won't visit until later.

```
try {
    throw new Error('Error!');
} catch (e) {
    console.log(e); // Error!
}
```

---

### JavaScript syntax and basics: Loops
- JavaScript supports `do`, `while`, `for`, `for...in`, and `for...of`, and more



```
for (var i = 0; i < 10; i ++) {
    console.log(i);
}
```

- The initializing expression is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
- The condition expression is evaluated. If the value of condition is true, the loop statements execute, else the for loop terminates. If the condition expression is omitted entirely, the condition is assumed to be true.
- The update expression, if there is one, executes, and control returns to step 2.
- There is no loop scoping in ES5, but we'll examing how that's changed.

---

### Learning Resources:
- [Mozilla Developer Network]: https://developer.mozilla.org/en-US/docs/Web/JavaScript "Mozilla Developer Network"
- [KahnAcademy][2]: https://www.khanacademy.org/computing/computer-programming/programming "Kahn Academy"
- [Lynda][3]: http://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html "Lynda"
- [Codecademy][4]: https://www.codecademy.com/en/tracks/javascript "Codecademy"
- [w3schools][5]: http://www.w3schools.com/js/default.asp "w3schools"
- [JavaScript Garden][6]: http://bonsaiden.github.io/JavaScript-Garden/ "JavaScript Garden"

----

- [Effective JavaScript][7]: http://effectivejs.com/ "Effective JavaScript"
- [Eloquent JavaScript][8]: http://eloquentjavascript.net/ "Eloquent JavaScript"
- [JavaScript: the Good Parts][9]: http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf "JavaScript: the Good Parts"
- [Awesome JavaScript][10]: ttps://github.com/sorrycc/awesome-javascript "Awesome JavaScript"
