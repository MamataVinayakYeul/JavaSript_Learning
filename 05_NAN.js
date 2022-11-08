//Type conversion//
var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);
console.warn("-----------------------------------------------------------");
var myName = "TEST";
var myAge = "31";
console.log(typeof myName);//return string
console.log("-------------------------------------------------------------");
console.log(typeof myAge);//returrn string
console.warn("-----------------------------------------------------------");
var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);
console.warn("-----------------------------------------------------------");
var myNameString =  +myName
console.log(myNameString, typeof myNameString);
console.warn("-----------------------------------------------------------");
var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);
console.warn("-----------------------------------------------------------");
var myAge = "31";
console.log(myAge, typeof myAge);
var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);
console.warn("-----------------------------------------------------------");
var myName = "TEST";
console.log(typeof myName);
var myNameString =  +myName;
console.log(myNameString, typeof myNameString);
console.warn("-----------------------------------------------------------");
var operand1 = 100;
var operand2 = 200;
console.log(operand1 + operand2);
console.warn("-----------------------------------------------------------");
var operand1 = "100";
var operand2 = "200";
console.log(operand1 + operand2);
console.warn("-----------------------------------------------------------");
console.log("===== Implicit conversion to number======");
console.log("4"-true); // 4-1
console.log("4"+true);
console.log("4"-false); // 4
console.log("4"+false);
console.warn("-----------------Implicit conversion to numbers------------");
console.log("4"+1);
console.log("4"+true);
console.log("4"+undefined);
console.log("4"+null);
console.warn("--------Implicit string conversion to number----------------");
console.log("4"-2);
console.log("4"+2);
console.log("4"*2);
console.log("4"/2);
console.warn("----------Undefined used with number,boolean or null----------");
console.log(4+undefined);
console.log(4-undefined);
console.log(true+undefined);
console.log(null+undefined);
console.warn("----------Explicit conversion ---------------------------------");
console.log("Convert number strings,boolean values to number In that case we can use Number()");
//string to number
console.log(Number(324));
console.log(Number(324e-1));
//boolean to number
console.log(Number(true));
console.log(Number(false));
console.warn("---------------------------------------------------");
console.log("Explicit Conversion:Invalid string to numbers return NaN");
console.log(Number("hello"));
console.log(Number(undefined));
console.log(Number(NaN));
console.log("Explicit conversion:string to number using +operator");
var numberInstring="100";
console.log(typeof numberInstring);
var myNumber=+numberInstring;
console.log(typeof myNumber);
console.log("-------------------------------------------------------------");
var myNumber=100;
console.log(typeof myNumber);//number
var afterconversion=myNumber.toString();
console.log(typeof (afterconversion));//string
console.warn("---------------------------------------------------");
var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
console.warn("---------------------------------------------------");


