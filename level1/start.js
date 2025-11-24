const a = {}
const b = {}

console.log(a == b);
console.log(a === b);



function f() { }
function f2() { }
const f3 = f

console.log(f == f2);
console.log(f === f2);
console.log(f === f3);