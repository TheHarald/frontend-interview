function Person(name) {
  this.name = name;  // this = новый объект!
}

const p1 = new Person('Alice');
console.log(p1.name);  // 'Alice' ✅
console.log(p1 instanceof Person);  // true ✅


const p2 = Person('Bob');  // ❌
console.log(p2);           // undefined ❌
console.log(p2 instanceof Person);  // false ❌