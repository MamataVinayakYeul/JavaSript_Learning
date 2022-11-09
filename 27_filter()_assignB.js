console.log("Assignment B- for filter() method");
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("Que 1: Find all numbers >50 and log on console ");
const array_new=array_numbers.filter((element)=>{
    return element>50;
});
console.log("Given array:-",array_numbers);
console.log("Number >50 from given array is array_new:-",array_new);
console.warn("------------------------------------------------------------------------------------");
console.log("Que 2: Find all even numbers and log on console");
const array_even_number=array_numbers.filter((element)=>{
   if(element%2==0){
    return element;
   }
});
console.log("Given array:-",array_numbers);
console.log("All even number from given array:-",array_even_number);
console.warn("------------------------------------------------------------------------------------");
console.log("Que 3: Find all odd numbers and log on console");
const array_odd_number=array_numbers.filter((element)=>{
    if (element%2!=0) {
        return element;
    }
});
console.log("Given array:-",array_numbers);
console.log("All odd number form given array:-",array_odd_number);
console.warn("------------------------------------------------------------------------------------");
console.log("Que 4: find all numbers which are multiple of 5 from given array ");
console.warn("------------------------------------------------------------------------------------");
const array_five_multiple=array_numbers.filter((element)=>{
    if (element%5==0) {
        return element;
    }

});
console.log("Given array:-",array_numbers);
console.log("All Multiple of 5, elements from given array:-",array_five_multiple);
console.warn("------------------------------------------------------------------------------------");
console.log("Que 5: Find all numbers between 20 and 50");
const array_between=array_numbers.filter((element)=>{
    if (20<element&&element<50) {
        return element;
    }
});
console.log("Given array:-",array_numbers);
console.log("All number between 20 and 50:-",array_between);

