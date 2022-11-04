function display() {
    console.log("Hello");
}
console.warn("-----------------------------------");
let show=()=>{
    console.log("Hello Good morning. I am ready for morning class of Angular");
}
show();
console.warn("-----------------------------------");
let add=function(n1,n2) {
    return n1+n2;
}
console.log( add(10, 20));
console.warn("-----------------------------------");
let sum = (n1, n2) =>  n1 + n2; 
// let sum1 = (n1, n2) => {
//     return n1 + n2
// } 
console.log("Summation of two numbers:-", sum(1000, 20));
console.warn("-----------------------------------");
let sub=(n1,n2)=>n1-n2;
console.log("Substraction of two numbers :-",sub(190,20));
console.warn("-----------------------------------");
let mul=(n1,n2)=>n1*n2;
console.log("Multiplication of two numbers:-",mul(130,23));
console.warn("-----------------------------------");
let divide=(n1,n2)=>n1/n2;
console.log("Division of two numbers:-",divide(129,5));
console.warn("-----------------------------------");
let modulous=(n1,n2)=>n1%n2;
console.log("Remiander of two numbers:-",modulous(130,4));
console.warn("---------------------------------------");
let display1=()=>{
    console.log("Good afternoon ,Today is Friday");
}
display1();
console.warn("---------------------------------------");
let displayed=()=>{
    console.log("Good morning ,Today is Friday");
}
displayed();


