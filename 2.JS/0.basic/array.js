// 배열 생성
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Banana", "Orange"];

const mixed = [1, "1", false, 1.2, "Hello", {hello: '안녕하세요'}];

console.log(numbers);
console.log(fruits);
console.log(mixed);

let variable;
console.log(variable);

variable = null;
console.log(variable);

variable = undefined;
console.log(variable);

console.log(typeof(mixed));

// 배열 접근

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits.forEach((fruit) => { // 1
    console.log(fruit);
}
)

fruits.forEach(function myfunc(fruit){ // 2
    console.log(fruit);
})

// 1 & 2 같은 값임

// 배열 수정
console.log(fruits)

fruits[1]= "Grapes";
console.log(fruits);

fruits.push("Tomato");
console.log(fruits);

new_fruits = fruits.pop();
console.log(new_fruits);
console.log(fruits);

const new_numbers = numbers.slice(1, 3); // (시작 인덱스, 종료 인덱스_마지막 미포함)
console.log(new_numbers);
