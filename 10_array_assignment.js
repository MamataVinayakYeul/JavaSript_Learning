//Assignment on Array for removing duplicate elements
arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Memon','Kamat','Andy','Taimur'];
console.log("Given Array of Names:",arrayOfNames);
var length=arrayOfNames.length;
console.log("Length of given array before removing duplicate elements:",length);
// console.log("----Remove duplicate elements(names)----");
let setOfNames=new Set(arrayOfNames);
console.log("After removing the duplicate elements:",setOfNames);
let len=setOfNames.size;
console.log("Length of given array after removing duplicate elements:",len);
var count=length-len;
console.log("Removed elements from given arrayOfNames:",count);
console.log("Count of Unique elements:",len);

