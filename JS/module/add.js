function add1(a, b){
    return a + b;
}
function add2(a, b, c){
    return a + b + c;
}

// 다른 모듈에서 이 모듈을 사용할 수 있게함
module.exports = {
    add1, 
    add2
}; 
