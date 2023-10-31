const numbers = [1, 2, 3, 4, 5];

// const sqrNumbers = numbers.map((num) => num * num);

const sqrNumbers = numbers.map(function sqr(num){
    return num*num;
});

// function sqr(num){
//     return num*num;
// }

console.log(numbers);
console.log(sqrNumbers);