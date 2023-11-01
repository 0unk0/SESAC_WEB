const Person = require('./person');

class Student extends Person{
    constructor(name, age, gender, id, major ){
        super(name, age, gender);
        this.id = id;
        this.major = major;
    }

    study(){
        console.log(`${this.name} 학생이 ${this.major}을 공부하고 있습니다.`);
    }
}

module.exports = Student;