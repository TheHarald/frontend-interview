console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('3');
    })
    .then(() => {
        console.log('4');
    });

Promise.resolve()
    .then(() => {
        console.log('5');
        return Promise.resolve();
    })
    .then(() => {
        console.log('6');
    });

console.log('7');

new Promise((resolve) => {
    console.log('8');
    resolve();
}).then(() => {
    console.log('9');
});

queueMicrotask(() => {
    console.log('10');
});

console.log('11');



// 1 7 8 11 3 5 9 10 4 6 2