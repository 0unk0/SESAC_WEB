var result = 0; //global scope

console.log("result", result);

function add(a, b){
    let res = a + b; //block scope // 
    result = 10;
    console.log("result", result); 
    return res; 
}

console.log("result: ", result);
result = add(2, 5);

console.log("result: ", result);

