class MyPromise {

}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('Успех!'), 1000);
});

promise
    .then(result => {
        console.log(result); // "Успех!"
        return result + ' обработан';
    })
    .then(result => {
        console.log(result); // "Успех! обработан"
    })
    .catch(error => {
        console.error(error);
    });

// Тестирование статических методов
MyPromise.all([
    MyPromise.resolve(1),
    MyPromise.resolve(2)
]).then(results => {
    console.log(results); // [1, 2]
});