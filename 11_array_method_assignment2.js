const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
let arrayLength=array_numbers.length;
console.log("Question 1");
console.log("Total Length of array:-",arrayLength);
console.log("--------------------------------------------------------");
console.log("Question 2");
let first=array_numbers[0];
console.log("First Element of array:-",first);
let last=array_numbers[arrayLength-1];
console.log("Last Element of array:-",last);
console.log("--------------------------------------------------------");
console.log("Question 3");
let Third_last=array_numbers[arrayLength-3];
console.log("Third Last Element of array:-",Third_last);
console.log("--------------------------------------------------------");
console.log("Question 4 Even Numbers from Array");
function getEvenNumbers() {
    var array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
    for(var i=0;i<=array_numbers.length;i++)
    {
        if (array_numbers[i]%2===0) {
            console.log(array_numbers[i]);
        }
    }
    
}
getEvenNumbers();
console.log("--------------------------------------------------------");
console.log("Question 5 Odd Numbers from Array");
function getOddNumbers() {
    var array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
    for(var i=0;i<=array_numbers.length;i++)
    {
        if (array_numbers[i]%2!==0) {
            console.log(array_numbers[i]);
        }
    }
    
}
getOddNumbers();
console.log("--------------------------------------------------------");
console.log("Question 6 Even Positioned elements from Array");
function EvenPositioned(array_numbers ) {
    let result=[];
    for (let i in array_numbers) {
        if (i%2==0) {
          result.push(array_numbers[i]);
            
        }
    }
    console.log(result.join(" "));
}
EvenPositioned([20,31,40,25,23,11,29,9,60,2,11])
console.log("--------------------------------------------------------");
console.log("Question 7 Odd Positioned elements from Array");
function OddPositioned(array_numbers ) {
    let result=[];
    for (let i in array_numbers) {
        if (i%2!==0) {
          result.push(array_numbers[i]);
            
        }
    }
    console.log(result.join(" "));
}
OddPositioned([20,31,40,25,23,11,29,9,60,2,11])
console.log("--------------------------------------------------------");
console.log("Question 8 Sum of all array elements");
function sumArray(array_numbers) {
    let sum =0;
    for (let index = 0; index < array_numbers.length; index+=1) {
       sum+= array_numbers[index];  
    }
    console.log(sum);
    return sum;
}
sumArray([20,31,40,25,23,11,29,9,60,2,11])
console.log("--------------------------------------------------------");
console.log("Question 9: Multiple of 5 ");

console.log("--------------------------------------------------------");
console.log("Question 10");
console.log("Is 115 available in given array:-",array_numbers.includes(115));
console.log("--------------------------------------------------------");
console.log("Question 11");
console.log("Is 23 available in given array:-",array_numbers.includes(23));
