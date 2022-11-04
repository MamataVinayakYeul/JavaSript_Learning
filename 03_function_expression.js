var test = function(arg1, arg2){
    console.log("Function expression", arg1);
    return "FE";
}
var returnValue = test(10, 20);
console.log(returnValue);

console.warn("----------------------------------------------");
var square=function (value){
console.log(value*value);
}
square(5);
console.log(typeof square);
console.warn("----------------------------------------------");
var multiply= function (param1,param2) {
    console.log("Multiplication of two numbers:-",param1*param2);
}
multiply(2,2);
multiply(9,2);
console.warn("----------------------------------------------");
var division=function(param1,param2) {
    console.log("Division of two numbers:-",param1/param2);
}
division(200,4)
division(100,3);
division(800,4)
console.warn("----------------------------------------------");
var add_three_numbers=function(param1,param2,param3) {
    console.log("Addition of three numbers:-", param1+param2+param3);
}
add_three_numbers(10,10,10);
add_three_numbers(100,200,300);
console.warn("----------------------------------------------");
var info=function(name,city,phone,hobby) {
    console.log("My information is:-",name,city,phone,hobby);
}
info("Mamata","Amravati",9911991110,"Listen to music");