console.log("----Sort() method----------------------");
const arrayOfNames=["Anil","Shantanu","Nutan","Suyog","DD","Pradhnya"]
arrayOfNames.sort();
console.log(arrayOfNames);
console.log("------------in descending order-------------------");
const arrayOfNumbers=[22,360,50,100,600,77,455];
let =arrayOfNumbers.sort((first,second)=>{
    return(first>second?-1:1)
});
console.log(arrayOfNumbers);
console.warn("=======================================================================");
console.log("------------in ascending order-------------------");
const arrayOfNumber=[22,360,50,100,600,77,455];
let =arrayOfNumbers.sort((first,second)=>{
    return(first>second?1:-1)
});
console.log(arrayOfNumbers);
console.warn("======sorting number array using callback function======================");
const array_Of_numbers=[211,11,25,33,311,9,299,100];
array_Of_numbers.sort(function(a,b){
    if (a>b) {
        return 1;
    }else if (a<b) {
        return -1;
    }else {
        return 0;

    }
});
console.log(array_Of_numbers);
console.warn("=======================================================================");
console.warn("======sorting number array using arrow function======================");
const array_Of_number1=[211,11,25,33,311,9,299,100];

console.warn("=======================================================================");
const array_names=["Sunil","Radha","Zetty","Jeny","Andy","Nancy"];
console.log(array_names);
array_names.sort();
console.log(array_names);
console.warn("=======================================================================");
//While sorting an array of numbers when element has more than two digits in that case sort() only considers first digit and hence the o/p is not as expected.
const array_Of_number=[211,11,25,33,311,9,299,100];
array_Of_number.sort();
console.log(array_Of_number);
console.warn("=======================================================================");
