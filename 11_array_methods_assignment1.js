const fruits_seasonal=["Banana","Orange","Apple","Mango","Watermelon"];
console.log("Given Array is:-",fruits_seasonal);
let arrayLength=fruits_seasonal.length;
console.log("Total Elements present in given fruits_seasonal array:-",arrayLength);
console.log("----------Question 1 First and Last Element of array------");
console.log("First Element of fruits_seasonal Array is:-",fruits_seasonal[0]);
console.log("Last Element of fruits_seasonal Array is:-",fruits_seasonal[arrayLength-1]);
console.log("----------Question 2 Add Papaya element in given array------");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log("----------Question 3 Remove element from given array------");
let splicedElement=fruits_seasonal.splice(4,1);//It remove the element
console.log("Removed Element:-",splicedElement);
console.log("Array after remove Mango element:-",fruits_seasonal);
console.log("----------Question 4 Insert Pineapple element in given array------");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log("----------Question 5 Insert Dragan Fruit element in given array before watermelon------");
fruits_seasonal.splice(4,0,"Dragan Fruit");
console.log(fruits_seasonal);
console.log("----------Question 6 Replace orange with kiwi------");
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);
console.log("----------Question 7 Log elements from index 1-4------");
let Fruit=fruits_seasonal.splice(1,3);
console.log(Fruit);
console.log("----------Question 8 Log last three elements------");
let LastThreeFruit=fruits_seasonal.splice(fruits_seasonal.length-3)
console.log(LastThreeFruit);



