function add(a, b, callback){
    const sum = a + b;
    callback(sum, a, b); // 내가 정의한 콜백 함수 
}

function displayResult(result, x, y){
    console.log(`${x} + ${y} = ${result}`);
}
res = add(2, 5, displayResult);
