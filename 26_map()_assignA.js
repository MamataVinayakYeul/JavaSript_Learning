console.log("Que 1: Add 10 into each ele and log on console using map()");
const array_numbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("Given Array:-",array_numbers);
//Add 10 in each element 
const array_ten_add=array_numbers.map((element,index)=>{
    return element+10;
});
console.log("Array after adding 10:-",array_ten_add);
console.log("------------------------------------------------------------");
console.log("Que 2: Square the each array ele and log on console");
const array_square=array_numbers.map((element,index)=>{
    return element*element;

});
console.log("Given Array:-",array_numbers);
console.log("Square of array element:-",array_square);
console.log("------------------------------------------------------------");
console.log("Que 3: Add the index val into array element and log new array on console");

const array_add_index=array_numbers.map((element,index)=>{
    return element+index;
});
console.log("Given Array:-",array_numbers);
console.log("New array:",array_add_index);