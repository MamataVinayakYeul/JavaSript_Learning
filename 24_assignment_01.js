console.log("Name:Mamata Yeul   Assignment No:01(Arrow Function)");
console.warn("----------Question 1--------");
let show=()=>{
    console.log("Good Evening,Today is Friday");
}
show();
console.warn("----------Question 2--------");
// let mul=(n1,n2,n3)=>(n1*n2*n3);
// console.log("Multiplication of Three Numbers:-",mul(5,5,2));

let Multiplication=(n1,n2,n3)=>{
    console.log("Multiplication of Three Numbers:-",n1*n2*n3);
}
Multiplication(5,5,2);
Multiplication(10,4,n3=1);
console.warn("----------Question 3--------");
let add=(arg1,arg2,arg3,arg4,arg5)=>{
    console.log("Addition of Five Numbers:-",arg1+arg2+arg3+arg4+arg5);

}
add(100,100,200,349,756);
add("I am"," learning "," ES6 "," features "," in depth ");
console.warn("------------------");

