console.log(10+10);
console.log(10+100.23);
var num1=500;
var num2=400;
var result=num1+num2;
console.log(`Result is :${result}`);
var num1=500;
var num2=200;
var result=num1-num2;
console.log(`Result is :${result}`);
var num1=500;
var num2=300;
var result=num1*num2;
console.log(`Result is: ${result}`);
var num1=400;
var num2=200;
var result=num1/num2;
console.log(`Result is ${result}`);
var num1=400;
var num2=200;
var result=num1%num2;
console.log(`Result is ${result}`);
console.log("==Odd number===")
var num1=40;
var num2=3;
var result=num1%num2;
console.log(`Result is ${result}`);
console.warn("-------------------------------------------------");
console.log("=========== ++increment===");

// var incr =num1 + 1;
//postfix//
var num1=10;
var num2=4;
var incr =num1++;
var decr=num2--;
console.log(`${incr}  ${decr}`);

//prefix
var num1=10;
var num2=4;
var incr =++num1;
var decr=--num2;
console.log(`${incr}  ${decr}`);
console.warn("-------------------------------------------------");
var num1=100;
var num2=50;
var num1 = num1 +num2;
num1+=num2;
console.log(`Compound Addition Operator:+= ${num1}`);

var num1=100;
var num2=50;
var num1 = num1 +num2;
num1+=num2;
console.log(`Compound Substraction Operator:-= ${num1}`);
var num1=100;
var num2=50;
var num1 = num1 +num2;
num1+=num2;
console.log(`Compound Multiplication Operator:*= ${num1}`);
var num1=100;
var num2=50;
var num1 = num1 +num2;
num1+=num2;
console.log(`Compound Division Operator:/= ${num1}`);
console.warn("-------------------------------------------------");
console.log(`-----------Comparition Operator-------`);
console.log(`=======Comparison operator======`);
var num1 = 100;
var num2 = 50; 

console.log("num1<num2 ===> ",   num1<num2);
console.log("num1>num2 ===> ",  num1>num2);
console.log("num1!=num2 ====> ", num1!=num2);
console.warn("-------------------------------------------------");
var num3 = 50; 
console.log("num2<num3) ===> ",  num2<num3);
console.log("num2<=num3) ===> ",  num2<=num3);
console.log("num2>num3=====> ", num2>num3);
console.log("num2>=num3=====> ", num2>=num3);
console.warn("-------------------------------------------------");
var num2 = 50; 
var num3 = "50"; 
console.log(`******* == operator ************`);
var result = num2 == num3; // 50 == 50

console.log("num2==num3=====> ", result);

console.log("num2===num3=====> ", num2===num3);//strinctly follow the type of input
