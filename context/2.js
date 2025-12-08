function greet() {
    console.log(this.name);
}

const person = {
    name: 'Bob',
    greet: greet
};

const func = person.greet;
func();
