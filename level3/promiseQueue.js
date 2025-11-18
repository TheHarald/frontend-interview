const queue = new PromiseQueue(2);


const createTask = (title, delay, fall) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fall) {
                reject('error')
            }
            resolve(title);
        }, delay)
    })
}


queue.add(createTask('task1', 4000), 1)
queue.add(createTask('task2', 2000), 10)
queue.add(createTask('task2', 500), 100)


queue.start()