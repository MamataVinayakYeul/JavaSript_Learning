console.info("Sorting Ascending/Descending order and reverse")
const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`original array:${array_roll_numbers}`);
console.log("Que 1: Reverse the array");
array_roll_numbers.reverse();
console.log(`Reversed array:${array_roll_numbers}`);
console.log("====================================================");
console.log("Que 2: Use sort()method");
array_roll_numbers.sort();
console.log(`Sorted array:${array_roll_numbers}`);
console.log("Que 3: Sort the array in ascending order");
array_roll_numbers.sort((a,b)=>{
    return a>b?-1:1;
});
console.log(`Sorted in ascending order :${array_roll_numbers}`);

console.log("====================================================");
console.log("Que 4: Sort the array in descending order only use sort()mehtod");
array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
});
console.log(`Sorted in descending order :${array_roll_numbers}`);
console.log("====================================================");
console.log("Que 5:Sort the array in descending order with using reverse()method");
array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
});
console.log(`Using sort:${array_roll_numbers}`);
array_roll_numbers.reverse();
console.log(`Sort the array in descending order with using reverse():${array_roll_numbers}`);
// let descend_array=array_roll_numbers.reverse();
// console.log("descend_array:-",descend_array);
console.log("====================================================");
console.log("Que 6:Find the Greatest number from array");
const max=array_roll_numbers.reduce((a,b)=> Math.max(a,b),-Infinity);
console.log(`Greatest number from array:${max}`);
console.log("====================================================");
console.log("Que 7: Find the smallest number from array");
const min=array_roll_numbers.reduce((a,b)=> Math.min(a,b));
console.log(`Smallest number from array:${min}`);
console.log("====================================================");
console.log("Que 8 : Remove duplicates form array");
let arrayUniqueElements=[...new Set(array_roll_numbers)];
console.log(`Array after removing duplicates:${arrayUniqueElements}`);
