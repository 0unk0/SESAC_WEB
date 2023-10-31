class mathOperation{
    static add(x, y){ // static: 객체를 생성(new)하지 않고 사용할 수 있음
        return x + y;
    }
    static subtract(x, y){
        return x - y;
    }

    div(x, y){
        return x / y;
    }
}

console.log(mathOperation.add(5,3));
console.log(mathOperation.subtract(10,4));

const myMathOperation = new mathOperation;
console.log(myMathOperation.div(5,1));