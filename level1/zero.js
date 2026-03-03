function fn1() {
    console.log('fn1');
    return 1
}
function fn2() {
    console.log('fn2');
    return 1
}
function fn3() {
    console.log('fn3');
    return 0
}



const a = fn1() && fn2() && fn3()

console.log(a)