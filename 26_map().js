console.log("--------------map()--------------------------------------------------------------");
const arrayNumbers=[2,3,5,4,6,1];
const newArray=arrayNumbers.map((element)=>{
    return element+5;
});
console.log(arrayNumbers);
console.log(newArray);
console.log("------------------map()----------------------------------------------------------");
const array_numbers=[20,11,40,25,23,11,9,90,60,2,19];
//Multiply each element with 2
const array_two_multiplier=array_numbers.map((element,index)=>{
    return element*2;
});
console.log(array_two_multiplier);

console.log("------------------map()----------------------------------------------------------");