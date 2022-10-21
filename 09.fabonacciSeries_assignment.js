console.log("WAP to print fabonacci series till 7 iteration");
var a = 0, b = 1;
console.log(a);
console.log(b);
for (var i = 0; i <= 5; i++) {
    var temp = a + b;
    console.log(temp);
    a = b;
    b = temp;

}
console.warn("---------------------------------------------------------------------------------------");
console.log("WAP to print the fabonacci series till 10 iteration");
var a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 0; i <= 7; i++) {
    var temp = a + b;
    console.log(a + b);
    a = b;
    b = temp;
}
console.log("-----------------------------------------------------------------------------------------");
console.log("WAP to print the fabonacci series till 13 iteration");
var a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 0; i <= 10; i++) {
    var temp = a + b;
    console.log(a + b);
    a = b;
    b = temp;

}