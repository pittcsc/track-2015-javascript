# Advanced JS 1

## Outline

### Type checking
- Because JavaScript is dynmically typed, type is not always clear. It's good practice to test critical variable types that could stray from their intended type, for example, incoming parameters.
- As discussed in our beginniners talk, JavaScript has a very small primitive type system: Boolean, Number, String, null, and undefined.
- All other structures (arrays, function, objects, Dates) are considered objects. So, for example: `typeof(['I', 'am', 'array']); //object`
- Primitive types are compared by value-checking, whereas object types are compared by reference. So if we have `var a = 1;` and `var b = 1;`, `a === b; //true`. However, if we have `var objA = { x: 1 };` and `var objB = { x:1 };`, `objA === objB; //false` because, although both objects have equal values, their references are the same.
- Say you and your neighbor have the same kind of car: same make, model, and color. Still, the cars are separate, and you presumably only drive your specific car. If there was ever any confusion, the license plate should be unique. JavaScript also have a unique license plate, an reference, assigned to every object. This is what is compared with comparative operators and assigned during assignment.
- For example, in this case both objects are considered exactly the same:
```
var objA = {x: 1};
var objARef = objA;
objARef.newProp = 'I am assigned to the original object';
console.log(objA.newProp); // "I am assigned to the original object"
objA === objAref; //true
```
- Comparing objects by value in JS is tricky. If the objects are expected to be identical in the order of their keys and values, then you can convert both `.toString()` and compare strings. Otherwise, you will need to cycle through the properties and compare individually (primitive properties of objects behave as expected). This is called a deep equality check. You need to be careful when doing this so that you don't cyclically reference property types of objects that may be objects themselves, or exaust the stack with recursive functions (as JS is not TCO-ed).

### Compartive operators: `==` versus `===`
- JavaScript has two comparative operators for testing equality. `==` first attempts type conversion before comparison, while `===` maintains the current type.
- For example: `false == 0; //true`
- Clearly, `==` can lead to unintended consequences, so the rule of thumb is to use `===` in most cases.
- Likewise for `!=` and `!==`

### Prototypal Inheritance
-

### JSON
- 

### `this`
- ![What 'this' refers to](https://twitter.com/bhalp1/status/578925947245633536 "What 'this' refers to")

### `.bind()`
- 

### References:
- [MDN: Inheritance and the Prototype Chain][1]
- [Functional Programming in JavaScript: Map, Filter, and Reduce][2]
- [Douglas Crockford on Prototypal Inheritence][3]
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain "MDN: Inheritance and the Prototype Chain"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind "MDN: .bind()"
[3]: http://javascript.crockford.com/prototypal.html "Douglas Crockford on Prototypal Inheritence"



