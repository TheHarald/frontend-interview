// Реализация функции debounce

function debounce(fn, delay) {
}


const debouncedFn = debounce(() => console.log('test'), 1000);

debouncedFn()
debouncedFn()
setTimeout(() => {
    debouncedFn()
}, 100)
// test x1
