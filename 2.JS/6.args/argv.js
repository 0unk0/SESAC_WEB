// console.log(process.argv);
// 커맨드 라인으로부터 입력 받기

let numRecords = process.argv[2];
let displayFormat = process.argv[3];

if(process.argv.length < 3){
    numRecords = 10;
    displayFormat = 'csv';
    // 입력 안받은 거임
}
for(let i = 0; i < numRecords; i++){
    console.log(i);
}
console.log(numRecords);

if(displayFormat =='csv'){
    console.log('Printing result to csv...');
}else if (displayFormat == "html" ){
    console.log('Printing result to <HTML>...');
} else{

}
