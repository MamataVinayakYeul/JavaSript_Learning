function functionName(name, Gender, age) {
}
 function MaleMarriageEligibilityCheck(gender, age, boy_name)
 {
    if (gender=="Male" && age >=21) 
    {
      console.log(`Hey ${boy_name} you are eligible for marriage`);  
    }else{
        console.log(`${boy_name} you are not eligible for marriage`);
    }
 }
 MaleMarriageEligibilityCheck("Male", 25, "Billgates");
 console.log("---------------------------------------");
 MaleMarriageEligibilityCheck("Male", 17, "Stew jobs");
    
console.log("------------------------------------------------");
function FemaleMarriageEligibility(gender, age, girl_name) 
{
    if(gender=="Female" && age >= 18)
    {
        console.log(`Hey ${girl_name} you are eligible for marriage`);
    }else{
        console.log(`${girl_name} you are not eligible for marriage`);
    }
}
FemaleMarriageEligibility("Female", 16, "Jenifer");
console.log("------------------------------------------------");
FemaleMarriageEligibility("Female", 27, "Malinda Gates");