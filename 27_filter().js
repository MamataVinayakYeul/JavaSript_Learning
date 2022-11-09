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
console.log("Sum of array elements:",sum);
console.log("---------------------------------");
const array=[20,30,4,5,60];
//returns array element which greater than 10
const array_new=array.filter((element)=>{
    return element>10;
});
console.log(array_new);