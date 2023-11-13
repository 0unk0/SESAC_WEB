const fs = require('fs');

const filePath = 'sample.csv';

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error('csv 파일 읽기에 실패했습니다', err);
    }
    console.log(data);

    rows = data.split('\n');

    // for loop 방식
    // for (let i = 0; i < rows.length; i++){
    //     // console.log(rows[i]);

    //     const row = rows[i];
    //     const columns = row.split(',');
    //     console.log(`행 ${i+1}: `, columns);
    // };

    // forEach 방식
    // rows.forEach((row, i) => {
    //     const columns = row.split(',');
    //     console.log(`행 ${i+1}: `, columns);
    // });

    // map 방식
    rows.map((row, i) => {
        const columns = row.split(',');
        console.log(`행 ${i+1}: `, columns);
    });
});