console.log("----------Function with no argument and no return value----------");
function name1(){
console.log("My first name is:", firstName);
}
let firstName="Vishal";
name1();
console.warn("---------------------------------------------------------------------");
console.log("----------Function with argument and no return value----------");
function FullName(firstname, lastname) {
    console.log(firstname," ", lastname);
}
FullName();
console.warn("---------------------------------------------------------------------");
function swap_values(arg1, arg2) {
    console.log("-------Before swap--------");
    console.log(arg1, arg2);
    console.log("------After swap-------")
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("virat", "Anushka");
swap_values(1000, 2000);
console.warn("---------------------------------------------------------------------");
function add_three_number(arg1, arg2, arg3) {
    console.log("answer of question 3");
    var arg1; var arg2; var arg3;
    console.log(arg1 + arg2 + arg3);
    console.log(arg1," ",arg2," ", arg3);
    console.log(arg1 ,"and",arg2 ,"and", arg3);
}
add_three_number(10.23, 600, 40);
add_three_number("Hello", "Good", "Morning");
console.warn("---------------------------------------------------------------------");




