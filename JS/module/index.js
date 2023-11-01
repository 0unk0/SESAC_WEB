// 인덱스 모듈에서 add 모듈의 함수를 불러와야함..

const {add1, add2} = require('./add');
let sum = add1(2,3);
console.log('결과: ', sum);

sum = add2(2, 3, 4);
console.log('결과: ', sum);


