function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mul(a, b){
    return a*b;
}
function div(a, b){
    if (b===0){
        console.log("0으로 나눌 수 없습니다.");
    }
    else{
        return a/b;
    }
}

console.log(add(5,3));
console.log(sub(5,3));
console.log(mul(5,3));
console.log(div(5,3));

//---------------------
console.log("---테스트 케이스---");
console.log(div(0,0));
// console.log(div(1,0));
// console.log(mul(-300,0));
// console.log(mul(BigInt(30000000001),BigInt(20000000002)));
// console.log(mul(BigInt(30000000001),BigInt(20000000002)));
// console.log(div(10000,'A'));
// console.log(div(10000));
// console.log(sub(10,10, 10, 10));