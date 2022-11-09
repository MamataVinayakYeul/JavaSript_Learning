const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("Que 1: Find the sum of all numbers");
const sum=array_numbers.reduce((runningTotal,value)=>{
    return runningTotal+value;
},0);
console.log("Given array:-",array_numbers);
console.log("Sum of all array elements:-",sum);
console.warn("-------------------------------------------------------------");
console.log("Que 2: Find the sum of all even numbers:");
//Hint --> filter first then use reduce
const array_even_number=array_numbers.filter((element)=>{
    if (element%2==0) {
        return element;
    }
});
const sum1=array_even_number.reduce((runningTotal,value)=>{
    return runningTotal+value;
},0);
console.log("Given array:-",array_numbers);
console.log("All even number from given array:-",array_even_number);
console.log("Sum of all even numbers from given array:-",sum1);
console.warn("-------------------------------------------------------------");
