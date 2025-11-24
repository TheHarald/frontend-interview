const user = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, I'm ${this.name}`);
    },
    greetDelayed: function () {
        setTimeout(function () {
            console.log(`Delayed hello, I'm ${this.name}`);
        }, 100);
    },
    greetArrow: function () {
        setTimeout(() => {
            console.log(`Arrow hello, I'm ${this.name}`);
        }, 100);
    }
};

const admin = { name: 'Admin' };



user.greet(); // Hello, I'm Alice
user.greetDelayed();
user.greet.call(admin);
const boundGreet = user.greet.bind(admin);
boundGreet();
const standaloneGreet = user.greet;
standaloneGreet();
