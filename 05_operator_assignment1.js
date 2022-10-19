var wordLengthSquare=function(word){
    var wordLength=word.length;
    return wordLength*wordLength;
 }
 var word ="Javascript";
 console.log(`The length of "Javascript:"`,word.length);
 console.log("The square of Javasript:",wordLengthSquare("JavaScript"));
 console.log("==========================================================");
 var word ="Google";
 console.log(`The length of "Google:"`,word.length);
 console.log("The square of Google:", wordLengthSquare("Google"));
 console.log("==========================================================");
 var word ="Developer";
 console.log(`The length of "Developer:"`,word.length);
 console.log("The square of Developer:", wordLengthSquare("Developer"));
 console.log("==========================================================");
 var string="I am Angular Developer";
 var lengthStr = string.length - 1; // 
 var reverseStr = "";
 for (let index = lengthStr; index >= 0; index--) {
    //  console.log(string.charAt(index));
     reverseStr = reverseStr + string.charAt(index)
 }
 console.log("Reverse of string I am Angular Developer:-->",reverseStr);



console.log(`The length of "I am a Angular Developer" is:`,string.length);
console.log("Result=",string.length/4);
console.log("Result=",string.length*4);