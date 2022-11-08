console.info("Question 1:Create object by using literal");
const bank_sbi={
    name:"SBI Pvt Ltd",
    location:"Akola",
    account_no:12345678911,
    acc_type:"saving"
}
console.log(bank_sbi);
console.warn("------------------------------------------------------------------------");
console.info("Question 2:Create object using literal with keys:street,city,pin-code");
const bank_location={
    street:"Popatkhed road,Akola",
    city:"Akola",
    pin_code:444101
}
console.log(bank_location);
console.warn("----------------------By using object.assign()-----------------------------");
const cloned_bank_sbi=Object.assign({},bank_sbi);
console.log("Cloned object:-",cloned_bank_sbi);
console.warn("----------------------By using spread operator-----------------------------");
const my_bank = {...bank_sbi};
console.log("Cloned object:-",my_bank);
console.warn("----------------------By using object.assign()-----------------------------");
const cloned_bank_location=Object.assign({},bank_location);
console.log("Cloned object:-",cloned_bank_location);//By using object_assign method
console.warn("----------------------By using spread operator-----------------------------");
const my_bank_location={...bank_location};
console.log("Cloned object:-",my_bank_location);//by using spread operator
console.warn("------------------------------------------------------------------------");
console.log("Question 3:create the object using literal");
let rate_of_interest={
    home_loan_interest:"6.40%",
    personal_loan_interest:"3.90%",
    due_interest:"3.5%"
}
console.log(rate_of_interest);
console.warn("------------------------------------------------------------------------");
console.log("Question 5: Merge Object");
let sbi_details=Object.assign(bank_sbi,bank_location,rate_of_interest);
console.table(sbi_details);
console.log("---------------------------------------------------------------------");
console.log("Question 6: Traverse the object ");
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(element);
    }
}
