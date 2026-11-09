Mastering Type Narrowing in TypeScript
Introduction
TypeScript's static type system allows variables to hold multiple types via unions. To safely perform operations on these variables, developers rely on type narrowing. Type narrowing is the process of refining a broader type into a more specific type within a conditional code block, ensuring runtime safety.

Detailed Body Paragraphs
The most common technique for type narrowing is the typeof operator, which effectively narrows primitive types such as strings, numbers, and booleans.

TypeScript
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}
For class instances, the instanceof operator checks if an object is an instance of a specific class constructor. Furthermore, the in operator helps narrow down types by checking for the existence of a specific property within an object.

TypeScript
class Dog {
  bark() { return "Woof"; }
}
function handleAnimal(animal: Dog | string) {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.trim();
}
Conclusion
Type narrowing bridges the gap between flexible union types and strict runtime operations. By mastering tools like typeof, instanceof, and the in operator, developers can write robust, bug-free TypeScript applications that handle complex data structures with complete confidence.