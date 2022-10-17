function Quality(arg1) {
    console.log('Hey Mohan is a' + ' ' +arg1);
}
Quality('Hardworker');

function College(arg1,arg2) {
    console.log("My college name is:",arg1,arg2);
}
College('Govt','Chandrapur');

function dept(arg1,arg2) {
    console.log("My department number is:",arg1,"department name is:",arg2);
}
dept('10','Physics');
function FullName(firstName,lastName) {
    console.log("My full name is:",firstName+lastName);
}
FullName("Mahima","Chadhary");
function swap_values(arg1,arg2) {
console.log("Before swap values are:",arg1,arg2);
   var temp=arg1;
   arg1=arg2;
   arg2= temp;
    console.log("After swap values are:", arg1,arg2);
}
swap_values('Virat','Anushka');
swap_values(1000,2000);
function add_three_numbers(arg1,arg2,arg3) {
    console.log("Addition of three numbers are:",arg1+arg2+arg3);
}
add_three_numbers(10.23,600,40);
add_three_numbers('Hello','Good','Morning');