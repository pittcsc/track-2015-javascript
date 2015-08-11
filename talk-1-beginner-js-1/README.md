# Beginner Javascript 1

## Outline

### Intro to the 2015 JavaScript track
- We hope to appeal to a diverse audience. Some members may be coming from 0007, while others will be coming from compiles, and we want to have something for everyone
- Since the University of Pittsburgh does not cover JavaScript (or, arguably, web development) in-depth, we're going to err on the side of inexperience, and attempt to move from 0-experience to modern web development, such that members who attend all talk will be able to fruitfully build non-trivial projects
- We will provide a roadmap for the track, allowing members to selectively attend sessions based on interest, schedule, etc. Still, it should be mentioned that many of the presentations, especially the language presentations, will be the foundation for future presentations and workshops

### Intro
- JavaScript is to Java what car is to carpet
- Javascript is a web scripting language

### History of JavaScript
- Javascript created in a little over a week by Brendan Eich at Netscape (now Mozilla)

### Why use JavaScript
- v8 is crazy fast
- Community is enormous and thriving
- JS is flexible and lends itself to quick iterations
- There is no other choice for frontend web scripting

### Cool projects that use JavaScript
- ThreeJS and BabylonJS
- JS arduinos
- JS OS
- Node
- Frontend frameworks like Angular, Backbone, and Ember

### Why not use JavaScript
- Quirky language
  - `1 == "1" //true`
  - `typeof NaN //number`
  - `0.1 + 0.2 == 0.3 //false`
- Prototypal inheritance is scary
- No type safety
- No safety at all, really

### JavaScript syntax and basics: Types: Numbers
- No such thing as an integer
- For example:  `var  value = 0.1 + 0.20; // value = 30000000000000004`
- NaN (Not a Number) is, ironically, a type of number
  - It can be used to evaluate number types using `.isNaN` or the `typeof` keyword
- JavaScript also has the unique `Infinity` and `-Infinity` number types
- JavaScript supports the usual arithmitic operators:
  - `+`: Addition
  - `-`: Subtraction
  - `*`: Multiplication
  - `%`: Modulo or Remainder
  - `**`: Exponent
- The Math library is also available for more complicated oprations and constants, such as:
  - `Math.PI`: PI
  - `Math.ceil()`: Next largest integer
  - `Math.random()`: psuedo-random number generator
- 0 and NaN are falsy, while any non-0 number is truthy
- Be very careful when mathing-ing in JavaScript, especially when working with Strings
  - `parseInt()` can be used to coerce Strings to Numbers

### JavaScript syntax and basics: Types: Strings
- Strings are arrays of Unicode characters
- Strings come with built-in methods, such as `.toUpperCase()` and `.toLowerCase()`, `.charAt()`, and properties, including `.length`
- Example:  `var message = "hello".length; //message = 5`

### JavaScript syntax and basics: Types: Booleans
-

### JavaScript syntax and basics: Object Types: Objects
- Full disclosure: Nearly everything is an object in JavaScript
- An object in JavaScript is simply a hashmap with key-value pairs. A key is always a string, and a value can be any of the aforementioned types.
- Objects can be defined in a number of different ways:
  - 
- Object key-value pairs can be access with both dot and bracket notation. So:
- We'll visit objects more in-depth later when we go over Prototypal inheritence.

### JavaScript syntax and basics: Object Types: Functions
-

### JavaScript syntax and basics: Object Types: Arrays
-

### JavaScript syntax and basics: Object Types: Date
-

### JavaScript syntax and basics: Object Types: RegExp
-

### JavaScript syntax and basics: Non-Object Types: null and undefined
- Though they differ slightly, `null` and `undefined` signify non-existent objects
- `undefined` is not a type of function

### JavaScript syntax and basics: Loops and Control Structures
- 

### Learning Resources
- [Mozilla Developer Network][1]
- [KahnAcademy][2]
- [Lynda][3]
- [Codecademy][4]
- [w3schools][5]
- [JavaScript Garden][6]
- [Effective JavaScript][7]
- [Eloquent JavaScript][8]
- [JavaScript: the Good Parts][9]
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript "Mozilla Developer Network"
[2]: https://www.khanacademy.org/computing/computer-programming/programming "Kahn Academy"
[3]: http://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html "Lynda"
[4]: https://www.codecademy.com/en/tracks/javascript "Codecademy"
[5]: http://www.w3schools.com/js/default.asp "w3schools"
[6]: http://bonsaiden.github.io/JavaScript-Garden/ "JavaScript Garden"
[7]: http://effectivejs.com/ "Effective JavaScript"
[8]: http://eloquentjavascript.net/ "Eloquent JavaScript"
[9]: http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf "JavaScript: the Good Parts"
