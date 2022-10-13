var wordLengthSquare=function(word){
    var wordLength=word.length;
    return wordLength*wordLength;
 }
 var word ="Javascript";
 console.log(`The legth of "Javascript:"`,word.length);
 console.log("The square of Javasript:",wordLengthSquare("JavaScript"));
 console.log("==========================================================");
 var word ="Google";
 console.log(`The legth of "Google:"`,word.length);
 console.log("The square of Google:", wordLengthSquare("Google"));
 console.log("==========================================================");
 var word ="Developer";
 console.log(`The legth of "Developer:"`,word.length);
 console.log("The square of Developer:", wordLengthSquare("Developer"));
 console.log("==========================================================");
 var string="I am Angular Developer";
console.log(`The length of "I am a Angular Developer" is:`,string.length);
console.log("Result=",string.length/4);
console.log("Result=",string.length*4);