function sachin(money){
    
    console.log("Please go in market with Rs.:",money);
    console.log("Buy some vegetables");
    return "vegetables bag";
}
var veg=sachin(500);
console.log(veg);

function functionName(city,street,age,is_married){
//city
//street
//age
//is_married
return true,"Roja";

}
var value= functionName("Amravati","Rahatgaon",22)
console.log(value);

function swap_values(arg1,arg2){
    console.log("-------Before swap--------");
    console.log(arg1,arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swap_values("virat","Anushka");
swap_values("Mango","Apple");
swap_values(100,300);

console.log("---Addition function-------")
function addition(arg1,arg2,arg3)
console(arg1+arg2+arg3);