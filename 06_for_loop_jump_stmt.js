console.log("Print the numbers 1-5");
for (let index = 0; index < 10; index++) {
    if(index==5){
        break;
    }
    console.log(index); 
}
console.log("----Print the even numbers from 0 -10");
for (let index = 0; index < 10; index++) {
    if(index==2){
        continue;
    }
    console.log(index); 
}
