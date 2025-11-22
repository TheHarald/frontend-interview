

function promiseRace(promises) {

}

const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 500));
const promise3 = new Promise((_, reject) => setTimeout(() => reject('Error'), 200));

promiseRace([promise1, promise2])
    .then(result => console.log(result)) // 'Second' (самый быстрый успешный)
    .catch(error => console.error(error));