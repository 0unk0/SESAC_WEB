const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // 0 -- 입력 인터페이스(cli)
    output: process.stdout, // 1 -- 출력 인터페이스(cli)
});

rl.question("구구단의 단을 입력하세요: ", (input) => {
    const num = parseInt(input);
    if(!isNaN(num) && num >0 && num < 10){
        console.log(`${num}단 구구단을 출력합니다.`);
        for(let i = 1; i < 10; i++){
            console.log(`${num} x ${i} = ${num*i}`);
        }
    } else{
        console.log('숫자를 입력하세요!! 쫌....')
    }

    rl.close();
});