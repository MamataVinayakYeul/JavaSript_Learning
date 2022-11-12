console.log("Que 1:WAP to print number from 5 to 15 by incrementing 1");
var number=5;
do {
    console.log(number);
    number++;
} while (number<=15);
console.log("-----------------------------------------------------------");
console.log("Que 2:WAP to print number from 50 to 40 by decrementing 1");
var number=50;
do {
    console.log(number);
    number--;
} while (number>=40);
console.log("-----------------------------------------------------------");
console.log("Que 3: WAP to find first 15 odd number ");
var number=1;
do {
    if (number % 2 == 1) 
    console.log(number);
    number++;
} while (number<=30);
console.log("-----------------------------------------------------------");
console.log("Que 4: WAP to find first 10 even number");
var number=2;
do {
    if(number%2==0)
    console.log(number);
    number++;
} while (number<=20);
console.log("---------------------------------------------------------");
console.log("WAP to print table of 5 like 5 10 15 20 25....50");
var number=5;
do {
    if(number%5==0)
    console.log(number);
    number++;

} while (number<=50);
console.log("------------------------------------------------------------------");
console.log("WAP to print table of 10 like 10 20 30 .....100");
var number=10;
do {
    if(number%10==0)
    console.log(number);
    number++;
} while (number<=100);
console.log("------------------------------------------------------------------");
console.log("WAP to print table of 10 in reverse order like 100 90 80 ....10");
var number=100;
do {
    if(number%10==0)
    console.log(number);
    number--;
} while (number>=10);