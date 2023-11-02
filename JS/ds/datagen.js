// const array = Array.from({length: 100}, () => Math.floor(Math.random() * 100));

// console.log(array);

// const uniqueRandomNumbers = new Set();
// console.log(uniqueRandomNumbers.size);

// while(uniqueRandomNumbers.size < 100){
//     uniqueRandomNumbers.add(Math.floor(Math.random()*100));
// }

// console.log(uniqueRandomNumbers);

// const array2 = Array.from(uniqueRandomNumbers);
// console.log(array2);

let uniqueRandomNumbers2 = [];
while(uniqueRandomNumbers2.length < 10){
    let randomNumber = Math.floor(Math.random()*10);
    for(let i = 0; i < uniqueRandomNumbers2.length; i++){
        if(randomNumber !== uniqueRandomNumbers2[i]){ // !== 이어야하지 않나..?
            uniqueRandomNumbers2.push(randomNumber);
        }
    }
}
console.log(uniqueRandomNumbers2);