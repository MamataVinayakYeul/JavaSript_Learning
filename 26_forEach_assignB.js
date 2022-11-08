console.warn("Que 1:Print the array values(elements) and its index with index using foreach loop");
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
array_numbers.forEach(function(currentValue,index){
    console.log("Element:",currentValue, "    index value",index);
});
console.log("============================================================");
console.warn("Que 2:Find out all positive numbers from given array using arrow function");
array_numbers.forEach((currentValue,index)=>{
    if (currentValue>0) {
        console.log("Element:",currentValue, "index value",index);
    }
})
console.log("============================================================");
console.warn("Que 3:Find out all negative numbers from given array");
array_numbers.forEach((currentValue,index)=>{
    if (currentValue<0) {
        console.log("Element:",currentValue, "index value",index);
    }
});
console.log("============================================================");
console.warn("Que 4:Even numbers from given array");
array_numbers.forEach((currentValue,index)=>{
if (currentValue%2==0) {
    console.log("Element:",currentValue);
}
});
console.log("============================================================");
console.warn("Que 5:odd Numbers form array");
array_numbers.forEach((currentValue,index)=>{
    if (currentValue%2!==0) {
        console.log("Element:",currentValue);
    }
    });
console.log("============================================================");
console.warn("Que 6:Sum of elements of array_numbers");
    let sum=0;
    for (let index = 0; index < array_numbers.length; index++) {
         sum=sum+array_numbers[index];
        // return sum;
        console.log("Sum of elements:",sum);
    }
    
console.log("============================================================");
console.warn("Que 7:Even positioned  array value using foreach loop and arrow function");
array_numbers.forEach((currentValue,index)=>{
    if ( index%2==0) {
        console.log("Element:",currentValue);
    }
 
});
console.log("============================================================");
console.warn("Que 8:Odd positioned  array value using foreach loop and arrow function");
array_numbers.forEach((currentValue,index)=>{
    if (index%2!==0) {
        console.log("Element:",currentValue);
    }
})
console.log("============================================================");