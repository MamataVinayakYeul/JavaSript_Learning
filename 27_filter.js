console.log("-------------filter() method -------------");
const arrayOfNumbers=[2,3,5,4,6,1];
let newArray=arrayOfNumbers.filter((element)=>{
    return element>=4;
});
console.log(newArray);
console.log("-----------------------------------");
let newArray1=arrayOfNumbers.map((element)=>{
    return element>=4;
});
console.log(newArray1);
console.log("-------------Reduce()--------------------");
let sum=arrayOfNumbers.reduce((value,runningTotal)=>{
return value+runningTotal;
});
console.log(sum);
console.log("---------------------------------");
