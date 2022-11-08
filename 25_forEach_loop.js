let show=(n1,test)=>{
    console.log("Hi I am Mamata");
}
show(10,"test");
console.warn("---------for each loop(currentValue,index,array)----------------");
const arrayNumbers=[10,20,30,20,10];
arrayNumbers.forEach(function(currentValue,index,array){
    console.log(currentValue,index,array);

});
console.warn("----------------------------------------------------------------");
const array_Numbers=[10,-20,30,40,20,10,-30];
array_Numbers.forEach((currentValue,index)=>{
    if (currentValue<0) {
        console.log(currentValue,index);
    }
});
console.warn("----------------------------------------------------------------");
//or we can write for each loop as below by using arrow function with mandatory value(current value).index and array are optional values
arrayNumbers.forEach(currentValue=>console.log(currentValue));

console.warn("----------------------------------------------------------------");
console.log("======Trversing set using forEach()====");
const setOfNumbers=new Set(arrayNumbers);
setOfNumbers.forEach((value)=>{
    console.log(value);
});
console.log("======Trversing map using forEach()====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
console.log("----------------------------------------------------------------");
console.log("======Traversing array_object using forEach()====");
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
 array.forEach((person) => {
    console.log(person);
});
console.log("---------------forEach() for Set with mandatory current value and index,set are optional-------------------------------------------------");
const set=new Set();
set.add(60);set.add(70);set.add(80);
set.add(20);set.add(30);set.add(40);
set.forEach((currentValue,index,set)=>{
    console.log(currentValue,index,set);
});
console.log("---------------forEach() for Set with only mandatory value-------------------------------------------------");
const set1=new Set();
set.add(60);set.add(70);set.add(80);set.add(90);
set.add(20);set.add(30);set.add(40);
set.forEach((currentValue)=>{
    console.log(currentValue);
});
console.log("---------------forEach() for Map with key and value (forEach for map using callback)-------------------------");
const map11=new Map();
map.set(11,"Anil");map.set(22,"Sunil");
map.set(33,"Radha");map.set(44,"Rani");
map.forEach(function(key,value){
console.log(key,value);
});
console.log("---------------forEach() for Map with key and value (forEach for map using arrow function)-------------------------");
const map1=new Map();
map.set(11,"Anil");map.set(22,"Sunil");
map.set(33,"Radha");map.set(44,"Rani");
map.forEach((key,value)=>{
console.log(key,value);
});