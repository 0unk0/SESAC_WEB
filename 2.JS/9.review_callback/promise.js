const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업 실행
    // 성공 -> resolve
    // 실패 -> reject
});

myPromise
    .then((result) => {
        // 성공했을 때
    })
    .catch((error) => {
        // 실패했을 때
    });

function asyncTask(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if(rand >= 0.5){
                resolve(rand, '작업 완료');
            } else{
                reject('작업 실패', null);
            }
        }, 1000);
    })
}

asyncTask()
    .then((result) => {
        console.log('성공: ', result);
    })
    .catch((error) => {
        console.log('실패: ', error);
    });