function greet() {
    console.log(this.name);
}

const person = {
    name: 'Alice',
    greet: greet
};

person.greet();
