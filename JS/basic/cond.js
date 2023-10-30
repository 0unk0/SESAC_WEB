let score = 60;

console.log('---if---')
if(score >= 90){
    console.log("A");
} else if(score >= 80){
    console.log("B");
} else if(score >= 70){
    console.log("C");
} else{
    console.log("F");
}

console.log('---switch---')
switch(score){
    case 90:
        console.log('A');
        break;
    case 80:
        console.log('B');
        break;
    case 70:
        console.log('C');
        break;
}

console.log('---END---')