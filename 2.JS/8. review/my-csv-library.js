const fs = require('fs');

function readCSV(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일 읽는 중 오류 발생', err);
            return callback(err, null);
        }
    
        const rows = data.split('\n');
        const result = rows.map((row) => row.split(','));
        callback (null, result);
    });
}

function writeCSV(filePath, dataToWrite, callback){
    const csvContent = dataToWrite.map((row) => row.join(',')).join('\n');
    fs.writeFile(filePath, csvContent, 'utf8', (err) => {
        if(err){
            console.error("파일을 쓰는 도중에 에러가 발생하였습니다", err);
            return callback(err);
        }
    
        // console.log('csv파일에 성공적으로 작성되었습니다.');
        callback(null);
    });
}

module.exports = { readCSV, writeCSV };

