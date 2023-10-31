function divide(a,b){
    try{
        if( b===0){
            throw "0으로 나눌 수 없습니다."
        }
        // 오류 발생 소지 구문
        result = a / b;
    } catch(error){ // throw로 던진 거를 error로 받아옴
        // 오류 핸들링 표현
        console.log("오류 발생", error);
    }
}

console.log(divide(10,0));

// try{
//     const result = myvariable * 2;
// } catch{
//     console.log("오류가 발생했습니다.");
// }