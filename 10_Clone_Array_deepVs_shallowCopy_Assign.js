console.log("Question 1-given array and array with push operation");
const array_nums=[20,3,4,56,90,400,49];
console.log("original Array:",array_nums);
array_nums.push(55);
array_nums.push(66);
console.log("Clone Array",array_nums);
console.log("Question 2-Deep Clone using spread operator");
array_nums.push(10,25);
console.log(array_nums);
console.log("Question 3-Concat or Merge even array with array_nums using spread operator");
const array_even=[2,30,14,8];
console.log("Even Array:",array_even);
console.log("merge Array:",array_even.concat(array_nums));
console.log("Question 4-Create employee info object as shown below");
const employee_info = {
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
     address:{
        locality:{
            colony:"OM vridavan Society",
            street:"Kanch Pokli,431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88", "1800- 4567 32", "+91-9096 5678 77"]
}
console.log("Employee object:",employee_info);
console.log("Question 5-log employee details on console Address:Locality,city,state and country");
console.log("Address:Locality,city,states and country:",employee_info.address.city,employee_info.address.state,employee_info.address.country);
console.log("Mobile Numbers:",employee_info.mobiles);
employee_info.address.locality.street="Parag Town Ship";
console.log(employee_info);
console.log(employee_info.address.locality.colony.street);
employee_info.mobiles[0]="9975667268";
console.table(employee_info.mobiles);


