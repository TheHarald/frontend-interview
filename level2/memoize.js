function memoize(fn) {

}


const slowCalc = (a, b) => {
    console.log('Calculating...');
    return a + b;
};

const memoized = memoize(slowCalc);

console.log(memoized(2, 3)); // "Calculating..." → 5
console.log(memoized(2, 3)); // 5 (из кэша)