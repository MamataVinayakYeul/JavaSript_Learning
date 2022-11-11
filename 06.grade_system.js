let score=95;
if (score=null) {
    console.log("Invalid input");
// } else if (score="Thirty"||score="Ninty"){
//     console.log("Invalid input"); 
} else if(score<35){
    console.log("fail");
}else if(score>=35){
    console.log("passed");
}else if(score>=35&&score<60){
    console.log("Grade is C");
}else if (score>=60&&score<75) {
    console.log("Grade is B");
} else if(score>75&&score<=90){
    console.log("Grade is A");
}else if (score>=90&&score<100) {
    console.log("Grade is A+");
}else if(score=-35&&score>100){
    console.log("Invalid input");
}else if(score="Forty Five"){
    console.log("Unhappy path");
}

