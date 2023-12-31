const {readCSV, writeCSV } = require('./my-csv-library2');

const sampleData = [
    ['이름', '생년월일', '성별'],
    ['이병헌', '19991001', '남'],
    ['이민정', '19991002', '여'],
    ['송혜교', '19991003' ,'여'],
];

const filePath = 'user.csv';

console.log('쓰기 시작');
writeCSV(filePath, sampleData, (err) => {
    if(err) {
        console.error('csv 파일 쓰기 실패');
        return;
    }
    console.log('성공적으로 csv 파일 쓰기 성공');
});
console.log('쓰기 종료');

console.log('쓰기 시작');
readCSV(filePath, (err, data) => {
    if(err){
        console.error('csv 파일 쓰기 실패');
        return;
    }
    console.log('csv 파일 내용: ', data);
});
console.log('쓰기 시작');