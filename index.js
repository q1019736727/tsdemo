var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello ' + person.fullName;
    // return "Hello, " + person.firstName + person.lastName;
}
var user = new Student('Chiu', 'Yung');
console.log(greeter(user));
document.body.innerHTML = greeter(user);
