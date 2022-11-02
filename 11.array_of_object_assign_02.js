console.log("Question1:Create class by using properies as:bank_name, location, account_no, ifsc,interest_rate");
class Bank{
    constructor(bank_name, location, account_no, ifsc,interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
    details(){
        console.log(`Bank Details: ${this.bank_name}  ${this.location}  ${this.account_no}  ${this.ifsc} ${this.interest_rate}`);
    }
}
console.log("-------------------------------------------------------------");
console.log("Question2");
let object1=new Bank("axis bank","Buldhana",45454574741,"UTIB0000400",'3.5%');
let object2=new Bank("sbi_bank","Nanded",12345678911,"SBIN00CARDS",'3%');
let object3=new Bank("icici_bank","Akola",12345678911,"SBIN00CARDS",'3%');
let object4=new Bank("kotak_bank","Yavatmal",12345678911,"SBIN00CARDS",'3%');
let object5=new Bank("shdfc_bank","Jalna",12345678911,"HDFC0000128",'3%');
let object6=new Bank("panjab_bank","Washim",12345678911,"PUNB0112000",'3%');

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);
console.log(object6);
console.log("-------------------------------------------------------------");
let merged_arr=Object.assign({},object1,object2);
console.log(merged_arr);
// const arr=["object1","object2","object3","object4","object5","object6"];

console.log("-------------------------------------------------------------");
console.log("Question 3:Bank_Name and Bank_Location");
console.log(object1.bank_name,object1.location);
console.log(object2.bank_name,object2.location);
console.log(object3.bank_name,object3.location);
console.log(object4.bank_name,object4.location);
console.log(object5.bank_name,object5.location);
console.log(object6.bank_name,object6.location);
console.log("-------------------------------------------------------------");
console.log("Question 4:Find object kotak bank by using for of loop");

// for (const [key,value] of Object.entries(user)) {
//     console.log(`${key}=>${value}`);
//  }