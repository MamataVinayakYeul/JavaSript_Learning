class Person {
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

const array = [ personAnil, personAnita, personBill];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.age>=50) {
        console.log(` ${element.fullName}  ${element.city}  ${element.age} ${element.gender}`);
    }
}


const arrayNumbers = [3,4, 56, 77, 88];
for (const element of arrayNumbers) {
    console.log(element);
}

for (const person of array) {
    if(person.age>=50) {
        console.log(` ${person.fullName}  ${person.city}  ${person.age} ${person.gender}  `);
    }
}
console.log("----------------For of loop----------------");
const  fruits=["Apple","Orange","Grapes","Pineapple","Watermelon","Dragen fruit","Guava","Nashpati"];
const arr_of_numbers=[1,2,3,5,7,11,13,17];
for (const element of fruits) {
    console.log(element);
}
console.log("----------------For of loop----------------");
const string="code";
for (const i of string) {
    console.log(i);
}
console.log("----------------For of loop----------------");
for (const numbers of arr_of_numbers) {
    console.log(numbers);
}
console.log("----sort() method--ascendng order--------------------------");
console.log(fruits.sort());//Sort array by using sort method

console.log(arr_of_numbers.sort());
console.log("----------------join() method--------------------");
console.log(fruits.join());
console.log(arr_of_numbers.join());
console.log("----------------concat() method--------------------");
console.log(fruits.concat(arr_of_numbers));
console.log("----------------concat() method--------------------");
console.log(arr_of_numbers.concat(fruits));
console.log("----------------Resize array-------------------");
console.log("Total elements are present in arr_of_numbers",arr_of_numbers.length);//size or length
arr_of_numbers.length=6;
console.log("Resized length:-",arr_of_numbers.length);
console.log("Total Fruits available in fruit array:-",fruits.length);//size or length of array
fruits.length=5;
console.log("Resized length:-",fruits.length);

