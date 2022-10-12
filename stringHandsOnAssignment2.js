console.log("===Print the string as it is==== ")
var stringHandsOn=function stringHandsOn(){
console.log("Given String: Hey you are doing good,keep it up");
}
stringHandsOn();

var string="  Hey you are doing good, keep it up         ";
console.log("Length of string is:",string.length);
var trimResult=string.trim();
console.log("Remove the leading and trailing spaces:", trimResult.length);
var extraSpaces=string.length-string.trim();
console.log(extraSpaces );
var txt="Hey you are doing good, keep it up";
console.log("First character of string is: ",txt.charAt(0));
console.log("Last character of string is: ",txt.charAt(33));
console.log("count of total words available in the string: ",txt.length);
console.log("Index of word good is:", txt.indexOf("good"));
console.log("substring starting from index 22", txt.slice(22));
console.log("Is string ends with word up:",txt.includes("up"));
console.log("Is the string start word is Hey:",txt.includes("Hey"));

