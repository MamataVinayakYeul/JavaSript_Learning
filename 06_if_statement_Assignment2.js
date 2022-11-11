console.log("Please make sure to write function for each step and use the if block");
console.log("=====Question 1: To check the number is even or odd============");
var number1 = 45;
if (number1 % 2 == 0) {
    console.log("45 Number is EVEN");
}
else {
    console.log("45 Number is ODD");
}
var number2 = 70;
if (number2 % 2 == 0) {

    console.log("70 Number is EVEN");
}
else {
    console.log("70 Number is ODD");
}

var number3 = 67;
if (number3 % 2 == 0) {
    console.log("67 Number is EVEN");
}
else {
    console.log("67 Number is ODD");
}

var number4 = 98;
if(number4%2==0){
    console.log("98 Number is EVEN");
}
else{
    console.log("98 Number is ODD");
}
console.log(" =========Question 2: Check if the person is eligible or not=============");
var age=18;
if(age>=18){
    console.log("Age=18, Person is eligible for vote");
}
else{
    console.log("Person is not eligible for vote");
}
console.log("-----------------------");
var age=20;
if(age>=18){
    console.log("Age=20, Person is eligible for vote");
}
else{
    console.log("Person is not eligible for vote");
}
console.log("---------------------------------");
var age=17;
if(age>=18){
    console.log(" Person is eligible for vote");
}
else{
    console.log("Age=17 ,Person is not eligible for vote");
}
console.log("-------------------------------------------");
var age=40;
if(age>=18){
    console.log("Age=40 ,person is eligible for vote");
}
else{
    console.log(" Person is eligible for vote");
}
console.log("===========Question 3========");
var string="JavaScript -ES6";
var strLength=string.length;
console.log("The given string is:",string);
console.log(`The length of string is:`,strLength);
// console.log("String length is =",strLength);
if (strLength=>10){
    console.log(`The string contain 15 char> 10 is :`,true);
}
else{
    return false;
}
console.log("------------------------------");
var string="JavaScript Language";
// console.log(slice(start,end));
console.log(`The string contain word`,string.slice(0,10));
console.log(`The string starts with Java:-` ,string.includes("Java"));
