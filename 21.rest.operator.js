'use strict'
function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);
console.warn("------------------------------");
function show(number,...values) {
    console.log(number,values);
}
show(101,"Mamata","Govt","BE Comp Sci",25,true);
console.warn("------------------------------");
function divide(x, y=1){
    console.log("Division of two numbers:-",x/y);
}
divide(10);
divide(100);
console.warn("------------------------------");
function add(a,b=2) {
    console.log("Addition of two numbers:",a+b);
}
add(10);
add(20);
console.warn("------------------------------");
function multiplication(a,b,c) {
    console.log("Multiplication of two numbers:-",a*b*c);
}
multiplication(10,20,30);
multiplication(100,13,25);
console.warn("------------------------------");
function substract(a,b) {
    console.log("Substraction of two numbers:-", a-b);
}
substract(150,20);
substract(230,10);
console.warn("------------------------------");
function modulo(x,y) {
    console.log("Remainder of two numbers:-",x%y);
}
modulo(120,20);
modulo(70,15);
modulo(23,2);
