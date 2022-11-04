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
console.log("===== Implicit conversion======");
console.log("4"-true); // 4-1
console.log("4"+true);
console.log("4"-false); // 4
console.log("4"+false);
console.warn("-----------------------------------------------------------");
console.log("4"-1);
console.log("4"+1);
console.log("4"+undefined);
console.log("4"+null);
console.warn("-----------------------------------------------------------");
var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
console.warn("---------------------------------------------------");


