const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path : 'example.csv',
    header: [
        { id: 'column1', title: 'Column 1' },
        { id: 'column2', title: 'Column 2' }
    ],
});

const data = [
    { column1: '값1', column2: '값2' },
    { column1: '값3', column2: '값4' },
];

csvWriter.writeRecords(data)
    .then(()=> console.log('csv 파일이 성공적으로 기록되었습니다.'));
