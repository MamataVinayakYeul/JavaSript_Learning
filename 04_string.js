var greet = "Good Morning";
console.log(greet);
var count = greet.length;
console.log(count);
console.log(greet.length);
console.log(greet.charAt(8));
var sonali = greet.charAt(8);
console.log(sonali);
console.log("=====charAt()=====")
console.log("=====indexOf()=========");
greet.indexOf(4);

console.log("======concat()======")
var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);
console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);
console.log("=======toUpperCase() and tolowercase()====")
replaceDemo.toUpperCase();
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());
var greet="   Good Evening bro and sis      ";
console.log('The length of string -Good Evening bro and sis is:-',greet.length);
var trimResult=greet.trim();
console.log('The trim lengh of string is:',trimResult.length);
console.log("=======include()====");
var greet="Good Evening bro and sis";
console.log('The string includes the word bro:',greet.includes("bro"));
console.log("=======subsring()====");
var greet="Good Evening bro and sis";
console.log('The subsrting of given string is:',greet.substring(7));
console.log(greet.substring(13,17));
console.log("=======slice()====");
console.log(greet.slice(7));
console.log(greet.slice(13,17));
console.log("=======split()====");
var studentList="Sachin, Mamata,Shrikant,Ashish";
var splitResult = studentList.split(",");
console.log(splitResult);
console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);
var fName = "Virat";
var lName = "Kohli";
// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);

var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);
console.warn("----------------------------------------------------");
//practice work on 18-10-2022//
var txt="Hello Amira";
console.log(txt.charAt(6));
var str1="JavaScript";
var str2="Codingtute!";
console.log(str1.charAt(0));
console.log(str2.charAt(3));
console.log(str1.concat(str2));
console.log(str1.includes('Script'));//returns true if includes the given word
console.log(str1.includes('script'));//returns false because in given string S char is uppercase and we gives i/p as lowercase s
var string1="My name is Raju and i will become a good civilian and good human being";
var string2="My father is a farmer";
console.log("The length of string My name is Raju and i will become a good civilian and good human being:",string1.length);
console.log("The length of string-My father is a farmer:", string2.length);
console.log();
console.log(string1.includes('Raju'));//if string contains given piece(slice) of string the reurn true
console.log(string2.includes('forther'));//return false
console.log(string1.concat(string2));
console.log(string2.charAt(3));
var text="Lets find where 'pen' occurs!";
console.log(text.indexOf('pen'));//return index of pen word from given string
console.log(text.substring(0,7));//return 7 characters from index 0 -7 including space
console.log(text.slice(0,10));//return first 10 characters including spaces
console.log(string1.lastIndexOf('and'));
console.log(text.replace("pen","Diamond"));
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.toString());//return given string
console.log(text.valueOf());//return value of given string
const s= 3.14;
console.log(typeof(s));
var text="      Lets find where 'pen' occurs!            ";
console.log(text.length);//return 47
console.log(text.trim());//return string without space
var num=240;
console.log(num.toString());
var str="hello dev"
console.log(str.search("dev"));
console.log(str.substring(1,4));
console.log(str.substr(4,6));
var boy="A B C D E F good";
console.log("The char code of A is:",boy.charCodeAt(0));
console.log("The char code of B is:",boy.charCodeAt(2));
console.log("The char code of C is:",boy.charCodeAt(4));
var strr="lopersum lopersum lopersum lopersum";
console.log(strr.match(/sum/));
var str = '1,2,3,4,5,6';
console.log(str.split(","));
var arr="Mamata, Sachin,Ashish, Anu";
console.log(arr.split(','));
console.log(arr.toLowerCase());
//string template variable substitution
var firstName="codemind";
var lastName="technology";
console.log(`First name is:${firstName} and Last name is:${lastName}`);



