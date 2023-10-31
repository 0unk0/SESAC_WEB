let array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1[0]);
console.log(array2[0]);

array1.push(7);
array1.push("가");
console.log(array1);
// array2.pop();
// array2.pop();
// array2.pop();
// console.log(array2);

array1=array1.slice(1,4); // 복제본
console.log(array1);

array1.splice(1,1,"가"); // 제거함
console.log(array1);

const array3 = array1.concat(array2);
console.log(array3);

const array4 = [...array1, ...array2];
console.log(array4);

array1 = [1, 2, 3];

console.log(array1);
console.log(array2);

array1.splice(1, 0, ...array2);
console.log(array1);

