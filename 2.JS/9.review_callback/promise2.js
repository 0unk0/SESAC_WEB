// callback hell -> Promise 형태로 변경..

function asyncFunc1() {
    return new Promise((resolve, reject) => { // 끝남 여부(성공 여부)를 반환
        setTimeout(function() { // 원래 함수
            console.log('함수1 완료');
            resolve('결과1');
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise((resovle, reject) => {
        setTimeout(function() {
            console.log('함수2 완료');
            resovle('결과2');
        }, 1000);
    });
}

asyncFunc1()
    .then(response1 => asyncFunc2(response1)) //
    .then(response2 => asyncFunc1(response2))
    .then(response3 => asyncFunc2(response3))
    .then(response4 => {
        console.log('최종 결과: ', response4);
    })
    .catch(error => {
        console.error('에러 발생: ', error);
    });