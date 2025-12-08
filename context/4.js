const obj = {
    value: 42,
    getValue: () => {
        return this.value;
    }
};


console.log(obj.getValue());