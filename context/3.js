// починить 3 способами

const user = {
    name: 'Alice',
    roles: ['admin', 'editor'],
    printRoles() {
        this.roles.forEach(function (role) {
            console.log(this.name + ' is ' + role);
        });
    }
};

user.printRoles();
