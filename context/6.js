function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hi, I'm ${this.name}, ${this.age} years old.`;
    };
}


const p1 = myNew(Person, 'Alice', 30);

console.log(p1);
console.log(p1.greet());        // "Hi, I'm Alice, 30 years old."
console.log(p1 instanceof Person); // true ✅
