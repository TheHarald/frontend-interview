/**
 * Реализуйте функцию-декоратор для измерения времени выполнения
 */

const slowFunction = (a, b) => {
    for (let i = 0; i < 1000000; i++) { }
    return a + b;
};

const timedFunction = withTimer(slowFunction);
const result = timedFunction(2, 3);
// Console: "Function executed in 15ms"
// Returns: 5