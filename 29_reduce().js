console.log("reduce method()");
console.log("Find the sum of all array elements");
const nums=[10,8,2,5];
const sum=nums.reduce((runningTotal,value)=>{
    return runningTotal +value;

},0);
console.log("Given array:-",nums);
console.log("Sum of given array elements:-",sum);//25
console.log("Find avarage using reduce");
console.warn("--------------------------------------------------------------");
const array_numbers=[20,11,40,25,23,11,9,90,60,2,19];
//Find the average [Average=Total elements Sum/total element]
let average =null;
let sum1 =array_numbers.reduce((runningTotal,value,index)=>{
    runningTotal=runningTotal+value;
    if (index==array_numbers.length-1) {
        average=runningTotal/array_numbers.length;
    }
    return runningTotal;
});
console.log(`Sum is ${sum1},Total Elements:${array_numbers.length},Average:${average}`);
