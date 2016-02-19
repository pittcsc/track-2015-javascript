# Functional Programming in Javascript

---

## Outline
- Introduction to functional programming
- First-order functions
- Lambdas and Annonymous Functions
- Closures
- Currying
- Immutability
- Arrays Manipulation (map, reduce, etc.)

---

## What is Functional Programming?
- A programming paradigm

----

## Features of Functional Programming
- Immutable
- Declarative

----

## Where is Functional Programming useful?
- Especially in UI manipulation.
- In prohibition-themed bars, functional programming can be used to impress equally hipster programmers while twirling your handlebar mustache and drinking from mason jars.

----

## But why JavaScript
- JavaScript is actually a highly functional language.
- For example: First-class functions, closures, currying, weak object orientation.
- Still, it's not a perfect vehicle for functional Programming.

Note: And it doesn't need to be: we can benefit from the broad strokes of functional programming while maintaining the expressiveness of JavaScript.

---

## Higher Order Functions
- In JavaScript, functions may be treated as variables

Notes: We touched on this in our advanced I presentation.

----

## Lambdas and Annonymous Functions
- Slight distinction between concept of Lambdas and Annonymous functions:
    - Lambdas are essentially annonymous functions passed as first-class function parameters to other functions.
    - For example, an annonymous callback would be a lambda.
    - Annonymous functions are simply unnamed.

Note: Though slightly, pedantic, it's important to understand that JavaScript supports both Lambdas and Annonymous functions. In a typical function definition, a function is given a name; in annonymous/lambdas, none is formally assigned. We will revisit lamba and annonymous functions in our functional programming presentation.


----

# Closures Review
- Closures are inner functions.
- The closure remembers the environment in which it was created.
- The environment here means any in-scope variables.
- Closures store references, not value!

```
function fullName(surname){
    var firstName = "Rick";

    function innerFunct(lastName){
        var greet = 'Welcome: ';
        console.log(greet + firstName + ' ' + lastName);
    };
    return innerFunct(surname);
};

fullName("Sanchez"); //Welcome: Rick Sanchez
```

Note: We return the innerFunct() closure, so we could assign it to a variable and call it any time. As we saw in the original example, the closure stores the parent variables by reference, not by value!

----

## Currying
- Functions should be tailored to a unique purpose and accept one argument.
- Example:

```
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

//curry
var addTen = add(10);

addTen(2); // 12
```

---

## Purity/Immutability
- A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect
- A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.
- Grants us "referential transparency": when it can be substituted for its evaluated value without changing the behavior of the program.
- For example, creating a new object with `Object.assign({}, ...)` or copying arrays with `[].concat()`
- Another example: `slice` and `splice`:
    - Do the exact same thing
    - Slice is pure because it returns the same output per input
    - Splice changed the original, which is an observable effect.

Note: Pure functions are cache-able based on common input, are portable to diverse input, stateless, and are testable. We can use a technique called "equational reasoning" wherein one substitutes "equals for equals" to reason about referential transparency.

---

## Array Manipulation
- Map, Filter, Fold, Reduce
- Produce new arrays after iteration with conditions

----

## Map

----

## Filter

----

## Fold

----

## Reduce

---

## Functional Programming in other languages
- Scala and Haskell are heralded as true functional languages.
- ClojureScript is a compile-to-JavaScript implementation of the functional language, Clojure.

----

## Questions?
