console.info("Sorting Ascending/Descending order and reverse")
const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log("original array:-",array_roll_numbers);
console.log("Que 1: Reverse the array");
array_roll_numbers.reverse();
console.log("Reversed array:-",array_roll_numbers);
console.log("====================================================");
console.log("Que 2: Use sort()method");
array_roll_numbers.sort();
console.log("Sorted array:-",array_roll_numbers);
console.log("Que 3: Sort the array in ascending order");
array_roll_numbers.sort((a,b)=>{
    return a>b?-1:1;
});
console.log("Sorted in ascending order :-",array_roll_numbers);

console.log("====================================================");
console.log("Que 4: Sort the array in descending order only use sort()mehtod");
array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
});
console.log("Sorted in descending order :-",array_roll_numbers);
console.log("====================================================");
console.log("Que 5:Sort the array in descending order with using reverse()method");
let descend_array=array_roll_numbers.reverse();
console.log("descend_array:-",array_roll_numbers);
console.log("====================================================");
console.log("Que 6:Greatest number from array");
console.log("====================================================");
console.log("Que 7: Find the smallest number from array");
console.log("====================================================");
console.log("Que 8 : Remove duplicates form array");
