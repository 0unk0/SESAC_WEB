const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("파일을 읽는데 오류가 발생했습니다.", err);
        return;
    }
    console.log("파일 내용: ", data);
});

const content = "안녕하세요 저는 최윤경입니다.";
fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error("파일을 쓰는데 오류가 발생했습니다.", err);
        return;
    }
    console.log("파일에 결과가 성공적으로 기록되었습니다. ");
})

// fs.readFile('example.txt', 'utf-8', readFileError);

// function readFileError(err, data){
//     if (err) {
//         console.error("파일을 읽는데 오류가 발생했습니다.", err);
//         return;
//     }
//     console.log("파일 내용: ", data);
// }

fs.copyFile("example.txt", "newFile2.txt", (err) => {
    if(err) {
        console.error("파일 복사중 오류가 발생했습니다.", err);
        return;
    }
    console.log("파일이 성공적으로 복사되었습니다.");
});