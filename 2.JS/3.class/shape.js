// const PI = 3.14;

// class Shape{
//     getArea(){
//         return 0;
//     }

//     getInfo(){
//         return "객체의 정보를 추가해주세요."
//     }
// }

// class Square extends Shape{
//     constructor(sideLength){
//         super(); // 부모 한번 호출해서 공간 만들어주고 밑에 확장해나가는 느낌쓰
//         this.sideLength = sideLength;
//     }

//     getArea(){
//         return this.sideLength ** 2;
//     }

//     getInfo(){
//         return `정사각형, 변수의 길이는: ${this.sideLength}`;
//     }
// }

// class Triangle extends Shape{
//     constructor(w, h){
//         super();
//         this.w = w;
//         this.h = h;
//     }

//     getArea(){
//         return this.w * this.h / 2;
//     }

//     getInfo(){
//         return `삼각형, 밑변의 길이는: ${this.w} 높이는: ${this.h}`;
//     }
// }

// class Trapezium extends Shape{
//     constructor(x1, x2, h){
//         super();
//         this.x1 = x1;
//         this.x2 = x2;
//         this.h = h;
//     }
//     getArea(){
//         return (this.x1 + this.x2) * this.h / 2;
//     }

//     getInfo(){
//         return `사다리꼴, 윗변의 길이는: ${this.x1} 밑변의 길이는: ${this.x2} 높이는: ${this.h}`;
//     }
// }

// class Circle extends Shape{
//     constructor(r){
//         super();
//         this.r = r;
//     }
//     getArea(){
//         // return PI * (this.r ** 2) ;
//         return Math.PI * (this.r ** 2);
//     }
//     getInfo(){
//         return `원, 반지름의 길이는: ${this.r}`;
//     }
// }

// //------------------------
// // Test: 상속 -> 상속 

// class Test extends Circle{
//     constructor(){
//         super(100);
//     }
// }

// const test = new Test();

// console.log('test: ', test.r);

// //--------------------------


// const square = new Square(5);
// const triangle = new Triangle(5, 10);
// const trapezium = new Trapezium(5, 5, 10);
// const circle = new Circle(5);


// console.log('Square Area: ', square.getArea());
// console.log('Square Info: ', square.getInfo());
// console.log('triangle Area: ', triangle.getArea());
// console.log('triangle Info: ', triangle.getInfo());
// console.log('trapezium Area: ', trapezium.getArea());
// console.log('trapezium Info: ', trapezium.getInfo());
// console.log('Circle Area: ', circle.getArea());
// console.log('Circle Info: ', circle.getInfo());


class Shape {
    constructor(type) {
        this.type = type;
    }

    getArea() {
        return 0;
    }

    getInfo() {
        return "객체의 정보를 추가해주세요"
    }

    toString() {
        return `${this.type} - Area: ${this.getArea()}`
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super('Square');                    // super는 부모클래스
        this.sideLength = sideLength;       // this는 나
    }

    getArea() {
        return this.sideLength ** 2;
    }

    getInfo() {
        return `정사각형, 변수의 길이는 : ${this.sideLength}`
    }
}

// 객체 생성 및 활용
const square = new Square(5);
console.log('Square Area:', square.getArea());
console.log('Square Info:', square.getInfo());
console.log('Square:', square.toString());


// // 미션1. 삼각형
// class Triangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height * 0.5
//     }

//     getInfo() {
//         return `삼각형, 변수의 길이는 : ${this.width} ${this.height}`
//     }
// }

// const triangle = new Triangle(8, 10);
// console.log('Triangle Area:', triangle.getArea());
// console.log('Triangle Info:', triangle.getInfo());


// // 미션2. 사다리꼴
// class Trapezium extends Shape {
//     constructor(upperbase, lowerbase, height) {
//         super();
//         this.upperbase = upperbase;
//         this.lowerbase = lowerbase;
//         this.height = height;
//     }

//     getArea() {
//         return (this.upperbase + this.lowerbase) * this.height * 0.5;
//     }

//     getInfo() {
//         return `사다리꼴, 변수의 길이는 : ${this.upperbase} ${this.lowerbase} ${this.height}`
//     }
// }
// const trapezium = new Trapezium(4, 6, 7);
// console.log('Trapezium Area:', trapezium.getArea());
// console.log('Trapezium Info:', trapezium.getInfo());


// // 미션3. 동그라미
// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }

//     getInfo() {
//         return `동그라미, 변수의 길이는 : ${this.radius}`
//     }
// }
// const circle = new Circle(10);
// console.log('Circle Area:', circle.getArea());
// console.log('Circle Info:', circle.getInfo());