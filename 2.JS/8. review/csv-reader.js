const fs = require('fs');
const csv = require('csv-parser');

const results =[];

fs.createReadStream('sample.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });
// 원래는 한 줄짜리 코드 -> 가독성위해 나눠놓음

