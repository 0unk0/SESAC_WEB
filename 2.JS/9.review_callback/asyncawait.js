function externalAPI(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random() >= 0.8; // boolean값

            if (result) {
                resolve('결과 왔음');
            } else {
                reject('응답 없음');
            }
        }, 1000);
    });
}

async function waitForResult(retryCount = 0){
    try{
        result = await externalAPI(); 
        console.log('결과 도착: ', result);
        return result;  
    } catch (error) {
        console.error(`에러 발생: ${error} 재시도: ${retryCount}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(waitForResult(retryCount+1)); // 왜 인자가 들어갔을 땐 resolve로 묶었어야했는지
            }, 1000);
        })
    }
}

// waitForResult();

waitForResult()
    .then((finalResult) => {
    console.log('최종 비동기 결과는?? ', finalResult);
});

console.log('실행 완료');