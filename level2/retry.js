const createUnstableFn = (failTimes = 0) => {
    let callCount = 0;

    return () => {
        callCount++;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (callCount <= failTimes) {
                    reject(new Error(`Вызов ${callCount} не удался (попытка ${callCount}/${failTimes})`));
                } else {
                    resolve(`Вызов ${callCount} успешен после ${failTimes} ошибок`);
                }
            }, 1000);
        });
    };
};



function retry(fn, maxRetries = 1, delay = 1000) { }

const unstableFn = createUnstableFn(2); // Функция упадет 2 раза, на 3й успех
const retryableFn = retry(unstableFn, 3, 1000);


retryableFn()
    .then(result => console.log(result))
    .catch(error => console.log(error));
