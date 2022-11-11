console.warn("count the total number of vowels using includes() for string -Good Morning IT Champ");
var myString="Good Morning IT Champ";
var vowelsLowerCase="aeiou";
var vowelsUpperCase="AEIOU";
var vowelsCount=0;
for (let index = 0; index < myString.length; index++) {
 var char=myString.charAt(index);
 var isLowerAvailable=vowelsLowerCase.includes(char);
 var isUpperAvailable=vowelsUpperCase.includes(char);
 if (isLowerAvailable||isUpperAvailable) {
    console.log(char,isLowerAvailable,isUpperAvailable);
    vowelsCount=vowelsCount+1;
 }
}
console.log(`Total Vowels count:${vowelsCount}`);
console.log("-------------------------------------------------------------------------------");

var countVowels = function(myString){

    var vowelsLowerCase="aeiou";
var vowelsUpperCase="AEIOU";
var vowelsCount=0;
for (let index = 0; index < myString.length; index++) {
 var char=myString.charAt(index);
 var isLowerAvailable=vowelsLowerCase.includes(char);
 var isUpperAvailable=vowelsUpperCase.includes(char);
 if (isLowerAvailable||isUpperAvailable) {
    console.log(char,isLowerAvailable,isUpperAvailable);
    vowelsCount=vowelsCount+1;
 }
}
console.log(`Total Vowels count:${vowelsCount}`);

}
countVowels("I love Javascript");
countVowels("Good Morning IT Champ");
console.warn("------------------------------------------------------------");
console.log("Write a function expression to sum all numbers from 1-10");
var sum=0;
for (let index = 1; index <=10; index++) {
var sum=sum+index;
   console.log(sum);
}
console.warn("------------------------------------------------");

//print the sum of square form 1 to 10 numbers
var index=1;
while (index<=10) {
 var square=index*index;
   console.log(" "+index,"=",square);
   index=index+1;
}
console.warn("-----------------------------------------------------------");
//print the sum of cube form 1 to 10 numbers

var index=1;
while (index<=10) {
 var cube=index*index*index;
   console.log(" "+index,"=",cube);
   index=index+1;
}



function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index); 
    }
}
evenPositionedChars("Hard work always pays back");
console.warn("--------------------------------------------------------");
evenPositionedChars("Soon I will be Angular IT Champ");
console.log("-------------------------------------------");
console.warn("Find the odd postion char from string:Hard work always pays back");
function oddPositionedChars(myString){
   for (let index = 0; index < myString.length; index++) {
      // console.log(index%2==0);
      var chh = myString.charAt(index);
      if (index%2!=0 && chh!=" ") {
         console.log(chh);
      }
      //var chh = myString.charAt(index);
       
   }
}
oddPositionedChars("Hard work always pays back");
console.warn("------------------------------------------");
oddPositionedChars("Soon I will be Angular IT Champ");
