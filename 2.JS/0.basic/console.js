console.log("hello");
const greeting = "hello, wolrd";

console.log(greeting);

const a = 10;
const b = 20;

console.log("Number: ", a, b);
console.log("Number: a=" + a + " b=" + b);
console.log(`Numbers: ${a} ${b}`); // template literal
console.log({ a, b }); // 객체 형태로 출력
console.log("%c 스타일 적용", "color:red"); // 스타일 적용 가능(웹 브라우저상)
console.log("\u2713"); // 유니코드로 기호 출력

const username = "alice";
const age = 20;

console.log(`Name: ${username}, Age: ${age}`);
