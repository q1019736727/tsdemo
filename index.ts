
class Student{
    fullName: string
    constructor(public firstName,public lastName){
        this.fullName = firstName + ' ' + lastName
    }
}

interface Person{
    firstName: string
    lastName: string
}

function greeter(person: Student) {
    return 'Hello ' + person.fullName
    // return "Hello, " + person.firstName + person.lastName;
}

let user = new Student('Chiu','Yung');

console.log(greeter(user))
// document.body.innerHTML = greeter(user)