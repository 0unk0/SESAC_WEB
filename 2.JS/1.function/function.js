// 함수 정의, 선언
function greet(){
    console.log("안녕하세요!");
}

greet();

function greetByName(name){
    console.log("안녕하세요,", name);
    console.log(`안녕하세요, ${name}님`);
}

greetByName("윤경");

function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mul(a, b){
    return a*b;
}
function div(a, b){
    return a/b;
}
console.log(add(5,3));
console.log(sub(5,3));
console.log(mul(5,3));
console.log(div(5,3));


//익명 함수
// 1. function 함수명 (파라1, 파라2...)
// 함수명 없이 변수에 담아서 호출
let result2 = function(x, y){return x * y};

// 2. 화살표 함수
// function 키워드도 없앰
let result3 = (x,y) => {return x*y};