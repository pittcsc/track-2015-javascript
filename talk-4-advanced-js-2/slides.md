# Advanced JS 2

---

## Outline
- Prototypal Inheritance
- JavaScript Design Patterns

Note: We won't have the time to review all JS design patterns. I've selected a few common ones we will see again throughout the track. Should be a short presentation (scope and context, which we reviewed last week, are much more difficult).

---

## JS Inheritance
- Class-less
- Object-oriented
- Prototypal: objects inherit directly from other objects

Note: We'll visit the `class` syntactic sugar in our ES6 presentation, but it should be considered a crutch. Most everything in JavaScript is either a primitive or an object. JS attempted to make it more appealing to classical programmers, but now it's caught in a unhelpful limbo with the `new` constructor pattern keyword. If we called it "Prototypical", it wouldn't be quirky enough for JavaScript.

----

## JS Objects
- Objects as dynamic bags
- Key-value pairs
- Any function can be added to an object in the form of a property.
- Add to the prototype to create properties of the object

Note: Anything that is not a primitive is an object in JavaScript. When an inherited function is executed, `this` points to the inheriting object

----

## `__proto__` (`[[Prototype]]`) v. `prototype`
- `__proto__` points to the prototype of the would-be "super" object.
- A `prototype` is an internal object from which other objects inherit properties.
- Object properties which are defined using the `prototype` object are inherited by inherited children.

Note: `__proto__` is just a public accessor of `[[Prototype]]`

----

## The Prototype Chain
- When trying to access a property of an object, the property will check at the object, then at the prototype of the object, etc.
- Any properties added to the parent prototype will be reflected in all children.
- You can also override any property in the child

Note: At the top of the chain is the Object prototype, whose prototype is `null`. The chain follows via `__proto__`/`[[Prototype]]`

----

## Prototypal Inheritance Example

```
MyObject.doSomething = function() {
    alert("I\'m from the original prototype!");
}

var anotherObject = new MyObject();
anotherObject.doSomething = function() {
    alert("I\'m doing my own thing!");
}

anotherObject.doSomething(); //"... doing my own thing!"
MyObject.doSomething(); //"I'm from the original ..."

MyObject.prototype.doSomething = MyObject.doSomething;

anotherObject.doSomething();  //(still) "... doing my own thing!"

var yetAnotherObject = new MyObject();

yetAnotherObject.doSomething(); //"... from the original prototype!"

//(pre-existing instances also inherit the new function)
```

Note: So you add a method to MyObject object called doSomething(). It creates a static method that only applies to that particular instance. When the function is assigned to the MyObject.prototype  it is inherited by all instances of that Object, including those we instantiated before the creation of the new function. Not only is the pattern an easy way to implement inheritance, but it can also come with a performance boost as well: when defining a function in an object, they're all created by reference (so all child objects point to the same function) instead of creating their own individual copies.

----

### New Objects: Literal syntax:
```
    var o = {a: 1};
```

Note: Object literals have a slight performance benefit (usually insignificant). However, object literals cannot be instantiated with `new` (though there may be more appropriate methods of inheritance/instantiation).

----

### New Objects: Constructor syntax:

```
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
```

Note: JavaScript does not have an explicit inheritance keyword, only `new`. New allows you to inherit from the `prototype`. You could always set this manually.

----

### New Objects: Factory syntax:

```
function makeCar() {
  var newCar = {}
  newCar.honk = function() {
    console.log("honk honk");
  }
  return newCar;
}
```

Note: This is an alternative to the native constructor, and creates an object manually. This also has the potential for mixins and other customizations. In addition to these examples, there is the native object prototypes, like `Object.create()` and latest ES6 features like `call` and `apply`, but we won't look at those right now.

----

## New
- Creates a new instance
- Binds `this` to the new instance
- Set the `__proto__` to the object referenced by the constructor function’s `prototype` property.

Note: `new` also does some weird stuff to return values. If you try to return a primitive, it won’t work. If you return any other arbitrary object, that does work, but `this` gets thrown away, breaking all references to it (including `.call()` and `.apply()`), and breaking the link to the constructor’s `prototype` reference.

---

## Design Patterns
- Patterns are resuable, easy, proven solutions to common problem archetypes.
- Patterns provide structure.
- Patterns are broad and flexible abstractions.
- Patterns provide a common vocabulary.

Note: Design patterns are just that: patterns, pattens to common issues that arise and patterns for normal development. They provide a cohesion to the chaos that is JavaScript. They are less of a cookbook  or algorithm and more of a expressive description. They allow developers to communicate using common phrases. Think: the encapsulation pattern in Java.

----

## Common JS Anti-Patterns
- Polluting the global namespace.
- Using JavaScript in an inline form as this is inflexible
- Using setTimeout or setInterval on async calls.
- Modifying the Object class prototype

Note: These are common pitfalls to avoid. Polutting the global namespace and inline JS in the web is almost a deliberate lack of design, but acceptable in extremely small use-cases. setTimeout and setInerval are notoriously dangerous patterns, using the term loosely; we will see common ways to combat this later with callbacks, promises, and async/await. Modifying the built-in object types has potentially disasterous side-effects. This list is not exhaustive, but it does cover most of the basics.

---

## Creational Patterns
- Patterns around creating objects.

----

### Constructor Pattern
- A constructor is a special method used to initialize a type of object
- Object constructors accept arguments to set the values of member properties and methods when the object is first created.
- Example:

```
function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}

var civic = new Car( "Honda Civic", 2009, 20000 );
```

Note: The `new` keyword is indicative of the constructor pattern in JavaScript. As we saw earlier, the constructor pattern emulates classical inheritance, even though that is not entirely reflective of the underlying mechanisms.

----

### Factory Pattern
- A factory function creates and returns an object
- Doesn't explicitly require a constructor.
- Useful when:
    - There is a complex component setup
    - We need to generate different instances of objects depending on the environment
    - We're working with many small objects that share properties

Note: Many tradeoffs between constructor and factory patten. Factories often provide more control over memory management. In fact, factories are arguably more popular than constructors, even though constructors are used by native objects. Unit-testing the factory pattern can also become more difficult.

----

### Prototype Pattern
- A fully initialized instance is copied or cloned

```
var myCar = {
  name: "Ford Escort",
  drive: function () {
    console.log( "Vroom vroom." );
  }
};

var yourCar = Object.create( myCar );
```

Note: This uses es5's `Object.create()`

----

### Singleton Pattern
- Only a single instance can exist
- Reduces memory and provides a single point of access

```
var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
```

Note: The Singleton object is implemented as an immediate anonymous function. The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world. The getInstance method demonstates another design pattern called "Lazy Load". Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary. Singleton is a manifestation of a common JavaScript pattern: the Module pattern.

---

## Structural Patterns
- Based on the idea of building blocks of objects.

----

### Module Pattern
- This pattern is used to mimic classes
- Create public/private properties.
- Reduces globally scoped variables

```
var myNamespace = (function () {

    //private
    var myPrivateVar = 0;
    var myPrivateMethod = function(foo) {
        console.log(foo);
    };

    //public
    return {
        myPublicVar: "foo",
        myPublicFunction: function(bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();
```

Note: The module pattern is extremely popular in JavaScript libraries. There are many possible syntactical implementations of the module pattern, especially with ES6. Here we see the encapsulation with mutators/accessors common to JavaScript. This utilizes much of what we reviewed in our previous presentation about closures, scope, and immediate annonymous functions.

---

## Behavioral Patterns
- Based on inter-object interaction.

----

### Observer Pattern
- Define a one-to-many dependency between objects
- When one object changes state, all its dependents are notified.
- Objects subscribe to an event and get notified when the event occurs.
- Example: event handlers in the DOM

Note: The Observer pattern is very similar to the Publisher-Subscriber and Mediator patterns. The Observer pattern requires that the observer (or object) wishing to receive topic notifications must subscribe this interest to the object firing the event (the subject). The Publish/Subscribe pattern however uses a topic/event channel which sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application specific events which can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher. This promotes event-driven code and loosely coupled objects.

---

## Questions?

