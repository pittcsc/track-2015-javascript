# Advanced JS 1

Note: Jesse gave a great presentation last week, and we'll be having a HTML, CSS, and jQuery workshop this Thursday. Stop by there for a practical introduction. We will be building personal resume sites. Stop me for any questions or corrections.

---

## Roadmap
- Hoisting
- Scope
- `this`
- Closures
- Callbacks
- Mocking private variables
- Annonymous and Lambda functions
- Tail-Call Optimization

---

## Review
- We touched on block scoping (or lack thereof) briefly.
```
var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < elements.length; i++) {
  var el = elements[i];
  console.log(el);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
- Not bad!

Note: This is a great example pulled from Zef.me.

----

## What about this?
```
var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var fns = [];

for(var i = 0; i < elements.length; i++) {
  var el = elements[i];
  fns.push(function() {
      console.log(el);
    });
}
fns[2]();
// 9
```

[whah?](http://www.youtube.com/watch?v=sluHwh3hJhI)

Note: Notice first of all that we can store functions in arrays and call them as you would normal functions. Now, all the values equal 9. Any guesses as to why? The closure of the generated functions contain pointers to variables, not a snapshot of the values at the point of definition. So if variables' values change, these changes are visible from within the function. This is a very powerful feature, but also a potentially very confusing one. We'll find the solution and review this all more in detail.

---

## Function and variable hoisting
- In JavaScript, all declarations are said to be "hoisted" to the top of the scope.
- Really, just processed before any code is executed.
- Declaring a variable anywhere in the code is equivalent to declaring it at the top of a given scope.
- This means that a variable can appear to be used before it's declared.
- Initializations and expressions are not hoisted.

Note: It's call called hoisting, but it's really just 2 passes: the first declarations, then executions. Variables maintain their relative scope regardless of hoisting.

----

```
hoistedVar1 = 5;

hoistedFunct(hoistedVar1, hoistedVar2);

var hoistedVar1;

function hoistedFunct(log1, log2) {
    console.log(log1);
    console.log(log2);
}

var hoistedVar2 = 6;
/*
5
undefined
*/
```

Note: In this example, the hoistedVar1 is assigned seemingly before it is defined. It is then logged by the hoistedFunct function, before its literal definition. Again, this is due to the multiple passes and scope hoisting. hoistedVar2, however, was not yet executed in scope, and is undefined. Also: know that this is a JavaScript anti-pattern; you should declare all scoped variables at the top of the scope. (Strict mode would even throw an error in this case.) We will visit other JavaScript design patterns in next week's presentation. As always in JS: just because you can, doesn't mean you should.

---

## Scope
- Scope is simply all the variables available at any instace.
- Block statements (loops, conditionals, error handling) do not introduce a scope.
- Variables introduced within a block are scoped to the containing function or script.
- Each time you attempt to access a variable within a function’s execution context, it will try its own variable object.
- If the identifier is not found in the variable object, it will climb up the scope chain examining every execution context.

Note: As seen in our original problem, this can be tricky. A variable can be defined in either local or global scope, which establishes the variables’ accessibility from different scopes during runtime. Any defined global variable, meaning any variable declared outside of a function body will live throughout runtime and can be accessed and altered in any scope

----

## Scope v. Context
- Every function invocation has both a scope and a context associated with it.
- Scope is function-based while context is object-based.
- Scope pertains to the variable access of a function when it is invoked and is unique to each invocation.
- Context is always the value of the `this` keyword which is a reference to the object that “owns” the currently executing code.

Note: In other words, scope is function-based, while context is object-based. The context also contains all the variables in the current scope, as they belong to the scoped object. 

----

## The Execution Stack and Scope Chain
- An execution context has a creation phase: the interpreter will first create a variable object (or activation object) of all the variables in the execution context.
- Then the corresponding scope chain is initialized, and the value of `this` is determined last.
- Finally, in the execution phase, code is interpreted and executed.

Note: JavaScript is a single threaded language, meaning only one task can be executed at a time. When the JavaScript interpreter initially executes code, it first enters into a global execution context by default. Each invocation of a function from this point on will result in the creation of a new execution context. Execution context is more scope than context, dispite the name. Each time a new execution context is created it is appended to the top of the execution stack. Once the top context is copleted, control will return to the execution context below.

---

## `this`
- In function scopes, `this` is a variable with the value of the object that invokes the function.
- So if the function is called from the global context, `this` would refer to the global context.
- If it's called as an object method, `this` refers to that object.
- If it's self-envoking, then it references itself.
- [What this refers to](https://twitter.com/bhalp1/status/578925947245633536)

Note: The biggest takeaway is that a new scope does not necessarily mean a new `this`. Strict mode changes the way `this` behaves. We'll talk about that in the es6 presentation. We can bind the `this` context to the callback with .call() and .apply() in es6.

----

## `this` in the wild
- From earlier:

```
var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var fns = [];

//this = global scope

for(var i = 0; i < elements.length; i++) {
  var el = elements[i];

  //this = same global scope

  fns.push(function() {

      //this  = fns function

      console.log(el);
    });
}
```

Note: Only the annonymous function is not within the same Window scope, if executing in the browser. That is a problem we'll need to solve. Otherwise, they will all reference the same object.

---

## Closures
- Closures are inner functions.
- The closure remembers the environment in which it was created.
- The environment here means any in-scope variables.
- Closures store references, not value!

```
function fullName(){
    var firstName = "Rick";

    function innerFunct(lastName){
        var greet = 'Welcome: ';
        console.log(greet + firstName + ' ' + lastName);
    };
    return innerFunct();
};

fullName("Sanchez"); //Welcome: Rick Sanchez
```

Note: We return the innerFunct() closure, so we could assign it to a variable and call it any time. As we saw in the original example, the closure stores the parent variables by reference, not by value!

----

## Closure Scope
- Although the closure can access the parent's variables, it maintains a personal `this`.
- There are work-arounds:
```
function init(){

    //this points to the object
    this.attr = 0;

    var that = this; //set this to a scoped variable

    var innerFunct = function(){
        //references parent scope
        that.attr = true;
    };
};
```

Note: It's not elegant, but it gets the job done.

----

## `.bind()`
- We can also use `.bind()` to deliberately bind a functions `this` to a context.
```
function init(){

    //this points to the object
    this.attr = 0;

    var innerFunct = function() {
        //references parent scope
        this.attr = 1;
    }.bind(this);
};
```

Note: This is an newer solution, and is not available in all browsers.

----

## Private Inner Variables
- It is possible to emulate private elements with closures.
- Called the Module pattern

```
function counter() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    getCounter: function() {
      return privateCounter;
    }
  };
};
//counter.getCounter(); === 0
```

Note: We will visit objects and the module pattern more in the Advanced JavaScript 2 presentation. Here we return an object that contains an accessor for the inner property.

---

## First-Class Functions
- In JavaScript, functions may be treated as variables
- As in our original problem, this means functions may be stored in arrays, as properties of objects, as values of variables, and passed as parameters, etc.

```
var myFunct = function() {
    console.log('test');
};
myFunct();
```

----

## Callbacks
- Callbacks are first-class functions, passed as parameters
- They are closures, intended to utilize information from the parent function after execution.
- However, these callbacks contain references to their personal environment, not the functions environment, so they do not contain the scope or `this` context.
- But we can pass parameters from the given context.

```
function myCallback(log) {
    console.log(log);
}
function myFunct(cb) {
    var innerVar = 5; //do things
    cb(innerVar);
}
myFunct(myCallback); // 5
```

Note: Callbacks may also be annonymous, called Lambdas. We will review this later, and then again in the functional programming presentation.

----

## Callbacks and Async
- Callbacks are especially useful in async code.
- A passed callback may be given results as parameters.
- A callback can execute after an action has finished.
- Still, this can lead to callback hell.

Note: We will visit async usages of callbacks and other methods of mitigating asynchronous code.

---

## Lambda/Annonymous Functions
- Slight distinction between concept of Lambdas and Annonymous functions:
    - Lambdas are essentially annonymous functions passed as first-class function parameters to other functions.
    - For example, an annonymous callback would be a lambda.
    - Annonymous functions are simply unnamed.

Note: Though slightly, pedantic, it's important to understand that JavaScript supports both Lambdas and Annonymous functions. In a typical function definition, a function is given a name; in annonymous/lambdas, none is formally assigned. We will revisit lamba and annonymous functions in our functional programming presentation.

----

## Variable assignment to Annonymous Functions
- You can assign and reference annonymous function in variables:
`var myFunct = function() {};`
- You can also assign a name and store the value in a function:
`var myFunct = function functName() {};`
- This will define a reference to the function name within it's own body, but not outside it!

Note: Something something horse with no name. In the former example, we could lose access to that annonymous function if the variable was reassigned. In the latter, the function name is available only within the function. We can also assign names to lambdas in the literal definition, while passing as a parameter.

----

- This will both define a named function and assign it to the variable

```
function functName() {};

var myFunct = functName;
```

Note: This is totally accessible equally as myFunct() and functName() in the proper scope.

----

## Annonymous function scopes
- As with closures, annonymous functions do not inherit `this`, but they do inherit the environment.
- And, again, the scope is shared by reference, not value.

Note: We'll talk about how fat-arrow functions can make maintaining `this` context easier. As with normal functions, the `this` here is the context that is calling.

----

## Self-Executing Annonymous Functions
- You can self-execute annonymous functions:
- This is especially useful in maintaining a scope and `this` context to that environment execution.

```
(function(loggable) {
    console.log(loggable);
})('Log me!');
```

Note: This can be useful in many circumstances to avoid side-effects and global scope pollution. This code contains its own scope and `this` execution.

----

- Original solution:

```
var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var fns = [];

for(var i = 0; i < elements.length; i++) {
  (function() {
    var el = elements[i];
    fns.push(function() {
        console.log(el);
      });
  }());

fns[2]();
//2
```

Note: Recall that in our first slide we posed this challenge: accessing an array element in a loop by value within a closure. What this simple trick does is define an anonymous function and immediately invoke it. A new scope is used for each iteration of the for loop, containing a fresh variable el. The functions that are generated now each refer to a different el.

---

## TCO
- Most compilers will recognize recursive tail-calls, and replace the code with iteration.
- As it stands, JavaScript is not tail-call optimized.
- ES6 stands to change that, but it's still something to keep in mind with recusive functions in JavaScript, which, as it stands, is not tail-call optimized for recursive calls. ES6 stands to change that, but it's still something to keep in mind with recusive functions in JavaScript, which, as it stands, is not tail-call optimized for recursive calls. ES6 stands to change that, but it's still something to keep in mind with recusive functions in `Maximum call stack size exceeded`

Note: Callstacks vary pretty wildly between browser implementations. It's generally a good idea to shy away from recursion in JavaScript.

---

## Questions?
