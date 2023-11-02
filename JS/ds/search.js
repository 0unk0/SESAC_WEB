// const array = Array.from({length:10}, () => Math.floor(Math.random() * 100));
const array = [1, 3, 2, 4, 6, 5, 7];

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i+1;
        }
    }
    return -1;
}

console.log(array);
console.time('linearSearch');
console.log(linearSearch(array, 5));
console.timeEnd('linearSearch');