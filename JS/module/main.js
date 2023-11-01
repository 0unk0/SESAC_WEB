
const Employee = require('./employee');
const Student = require('./student');

const employee1 = new Employee("영희", 30, "여성", "매니저", 50000);
const student1 = new Student("정미", 20, "여성", "20231234", "[새싹]풀스택");
const student2 = new Student("윤경", 20, "여성", "20239876", "[새싹]풀스택");

employee1.greet();
student1.study();