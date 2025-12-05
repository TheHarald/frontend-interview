console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('3');

        queueMicrotask(() => {
            console.log('4');

            Promise.resolve()
                .then(() => {
                    console.log('5');
                    return Promise.resolve();
                })
                .then(() => {
                    console.log('6');
                });

        })

        queueMicrotask(() => {
            console.log('7');

        })
    })

console.log('8');


// 1 8 3 4 7 5 6 2