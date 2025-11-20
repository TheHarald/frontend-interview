const tasks = [
    () => new Promise(res => setTimeout(() => res('Task 1'), 1000)),
    () => new Promise(res => setTimeout(() => res('Task 2'), 2000)),
    () => new Promise(res => setTimeout(() => res('Task 3'), 500)),
    () => new Promise(res => setTimeout(() => res('Task 4'), 1500)),
];


function promiseAll(promises) { }

promiseAll(tasks).then(results => {
    console.log(results); // ['Task 1', 'Task 2', 'Task 3', 'Task 4']
});