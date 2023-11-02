// const array = [64, 25, 12, 22, 11];
const array = Array.from({length: 100}, () => Math.floor(Math.random()*100));

function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    } else{
        const pivot = arr[arr.length-1];
        const left = [];
        const rigth = [];
        
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i]<pivot){
                left.push(arr[i]);
            }
            else{
                rigth.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(rigth)];
    }
}

console.log('정렬 전: ',array);
console.time('selectionSort');
const sortedArray = quickSort(array);
console.timeEnd('selectionSort');
console.log('정렬 후: ',sortedArray);