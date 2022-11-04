console.log("====Question1====");
var square = function(arg1){
    console.log("Square of ",arg1,"=" ,arg1*arg1);
}
square(5);
square(6);
square(25);
square(1000);
console.log("Type of function square is:",typeof(square));
console.warn("---------------------------------------------");
console.log("====Question2====");
var areaOfTriangle=function(arg1,arg2){
    console.log("Area of Triangle=",1/2*arg1*arg2);
    
}
areaOfTriangle(45,34);
console.warn("---------------------------------------------");
console.log("====Question3 ====");
var areaOfRectangle=function(arg1,arg2){
    console.log("Area of Rectangle is=",arg1*arg2)
}
areaOfRectangle(499,917);
console.warn("---------------------------------------------");
console.log("====Question4 swap values====");
var swap_values = function(arg1,arg2){
    console.log("Before swap values are:",arg1,arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After swap values are:",arg1,arg2);
}
swap_values("virat","Anushka");
console.warn("---------------------------------------------");
swap_values(1000,2000);
console.warn("---------------------------------------------");
var GivenString="JavaScript the most popular language";
console.log("Total Number of characters present in the string is:",GivenString.length);
console.log("The index of character 'S' is:",GivenString.indexOf('S'));
console.log("The index of string 'lang' is:",GivenString.indexOf('lang'));
console.log("The last character of given string is:",GivenString.charAt(GivenString.length-1));
console.log("The 3rd last character of given string is:",GivenString.charAt(GivenString.length-3));
console.warn("---------------------------------------------");







   