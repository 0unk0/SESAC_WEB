// const array = [1, 2, 3];
// for(const element of array){
//     console.log(element);
// }

// const obj = {a: 10, b:2, c: 3};
// // console.log(obj[1]);
// console.log(obj["a"]);

// for(const key in obj){
//     console.log(key);
//     console.log(key, obj[key]);
// }

// const today = new Date();
// console.log(today);

// const max_number = Math.max(10, 20, 30, 5, 3, 1);
// console.log(number);

const numbers = [-10, -20, -30, -5, -3, -1];
let max = numbers[0];

function max_numbers(numbers){
    for(i=0; i<numbers.length; i++){ 
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}

console.log(max_numbers(numbers));

//-----------------------------------------------


const text = "Hello, World";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
// console.log(text.length());
