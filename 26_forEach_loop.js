
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
//or we can write for each loop as below by using arrow function with mandatory value.index and array are optional values
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

console.log("======Trversing class using forEach()====");