var stringHandsOn= function (arg1){
console.log(`Given string is:${arg1}`);
console.log(`Length of given string:${arg1}-->`,arg1.length);
console.log(arg1.trim());
}
stringHandsOn("         Hey you are doing good,keep it up   ");
console.warn("--------------------------------------------------------");
string="  Hey you are doing good,keep it up  ";
var str_length=string.length;
var str=string.trim();
console.warn("--------------------------------------------------------");
console.log("Remove the leading and trailing extra space:-",string.trim());
console.log("length of trim string is:",str.length);
console.log("Total Number of extra space count is:",str_length-str.length);
console.warn("--------------------------------------------------------");
let count=str_length-str.length;
console.log("First character of string:-",str.charAt(0));
console.log("Last character of string:-",str.charAt(str.length-1));
console.warn("--------------------------------------------------------");
console.log("Total words available in the string are:-",str.split());
array=str.split();
console.log(array);
console.log(array.indexOf("good"));
console.log(str.substring(22));
console.log(str.slice(22));
console.log(str.lastIndexOf("up"));
console.log(str.slice(0,3));







