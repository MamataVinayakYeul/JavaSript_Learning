let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
console.log(typeof(arrayOfNumbers));
console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
console.log("--------------------traverse the whole array elements----------------------------------");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    console.log(element);
}
console.log("---------------------Another way to traverse the array elements-----------------------------------");
for (const key in arrayOfNumbers) {
        const element = arrayOfNumbers[key];
        console.log(element);
 
}
console.log("__________________________traverse the array elements__________________________________");
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);

}
console.log("-----------------------------traverse array in reverse order------------------------------------");
//traversing element from reverse order

let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
console.log("----------------add the element at the start ------------------");
console.log("========Unshift() Method==========");
let arrayOfNumbers1 = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers1);
arrayOfNumbers1.unshift(5,44);// we can add elements at the starting
arrayOfNumbers1.unshift(0);
console.log(arrayOfNumbers1);
console.log("----------------Replace the element from starting-----------");
console.log("========Shift() Method==========");
let array=[11,33,47,81];
console.log(array);
array.shift();
console.log(array);

console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

// //let splicedElements=array_numbers.splice(4);//It remove
// console.log("============ splice() ===========");
// let array_numbers = [1, 3, 7, 8, 9, 3, 7];
// console.log(array_numbers);
// let splicedElements =  array_numbers.splice(2,3);
// console.log(splicedElements);
// console.log(array_numbers);
// //let splicedElements=array_numbers.splice(2,0,22);
// console.log(array_numbers);
// //let splicedElements=array_numbers.splice(4,0,44);
// console.log(array_numbers);
// array_numbers.splice(2,2,22);
// console.log(array_numbers);
// array_numbers.splice(2,2,22,44,55);
// console.log(array_numbers);


console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array_numbers);
