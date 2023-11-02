const unsortedArray = [1, 5, 2, 4, 6, 2, 7];
const sortedArray = [1, 3, 2, 4, 6, 5, 7];

function binarySearch(arr, target){
    let left = 0; // 살펴볼 범위의 시작
    let right = arr.length - 1; // 살펴볼 범위의 끝
    while (left <= right){
        const mid = Math.floor((left + right)/2);

        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(unsortedArray, 5));
console.log(binarySearch(sortedArray, 5));