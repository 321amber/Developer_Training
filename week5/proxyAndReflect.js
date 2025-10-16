// In JavaScript, Proxy and Reflect are powerful tools for meta-programming, allowing developers to intercept and customize fundamental operations on objects.
// Proxy:
// A Proxy object acts as an intermediary for another object (the target). It allows you to intercept and redefine fundamental operations, such as property lookups, assignments, function calls, and more, using "traps" defined in a handler object.
// Reflect:
// Reflect is a built-in object that provides static methods for interceptable JavaScript operations. These methods often correspond to the internal methods that JavaScript uses to perform operations on objects. Reflect methods are particularly useful within Proxy traps to execute the default behavior of an operation, ensuring that the original functionality is preserved while custom logic is added

const targetObject = {
  name: "Alice",
  age: 30
};

const handler = {
  get(target, property, receiver) {
    console.log(`Getting property: ${String(property)}`);
    return Reflect.get(target, property, receiver);
  },

  set(target, property, value, receiver) {
    console.log(`Setting property: ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  }
};

const proxiedObject = new Proxy(targetObject, handler);

console.log(proxiedObject.name); 
console.log(proxiedObject.age); 

proxiedObject.name = "Bob";
proxiedObject.age = 35;  

console.log(targetObject.name); 