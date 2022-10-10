
console.log("====Question1====");
var square = function(arg1){
    console.log("Square of ",arg1,"=" ,arg1*arg1);
}
square(5);
square(6);
square(25);
square(1000);
console.log("Type of function square is:",typeof square);
console.log("====Question2====");
var areaOfTriangle=function(arg1,arg2){
    console.log("Area of Triangle=",1/2*arg1*arg2);
    
}
areaOfTriangle(45,34);
console.log("====Question3 ====");
var areaOfRectangle=function(arg1,arg2){
    console.log("Area of Rectangle is=",arg1*arg2)
}
areaOfRectangle(499,917);
console.log("====Question4 swap values====");
function swap_values(arg1,arg2){
    console.log("-------Before swap--------");
    console.log(arg1,arg2);
    console.log("====After swap===");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swap_values("virat","Anushka");
swap_values(1000,2000);

console.log("====Question6====")
console.log(" Given string is: JavaScript the most popular language");
var language="JavaScript the most popular language";
console.log(language);
var count = language.length;
console.log(count);
var charCount = language.charAt(4);
console.log(charCount);





   