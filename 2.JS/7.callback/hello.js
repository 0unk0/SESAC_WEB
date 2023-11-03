// 기본 API 설계자가 만든 것(디테일한 콜백은 호출 후 알아서~)
function greet(name, callback){
    const message = `안녕, ${name}!`;
    console.log(name);
    callback(message);
}

// 위 API를 호출하는 caller가 나머지 부분을 작성해 채워줌..
function displayGreeting(greeting){
    // console.log(greeting);
    console.log(`<H1>${greeting}</H1>`);

}
greet("예제",displayGreeting);

