console.log("Name:Mamata Yeul   Assignment No:D --Use filter() and reduce()");
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company; 
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
console.log("Add all employee object inside array namely 'array_emps");
let array_emps= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(array_emps);
console.warn("=========================================================================");
console.log("Que 1:Find all employee from 'Wipro' company");
array_emps.filter((employee)=>{
    if (employee.emp_company=='Wipro') {
        console.log(`Employee name:${employee.emp_name},Employee Company:${employee.emp_company}`);
    }

});
console.warn("=========================================================================");
console.log("Que 2:Find all the employee from'IT' OR 'HR' dept");
array_emps.filter((employee)=>{
    if (employee.emp_dept=="IT"||employee.emp_dept=="HR") {
        console.log(`Employee Name:${employee.emp_name}, Employee Department:${employee.emp_dept}`);
    }
});
console.warn("=========================================================================");
console.log("Que 3:Find all employee whose emp id>50");
array_emps.filter((employee)=>{
    if (employee.emp_id>50) {
        console.log(`Employee Name:${employee.emp_name},Employee Id:${employee.emp_id}`);
    }
});
console.warn("=========================================================================");
console.log("Que 4:Find all employee whose name starts with 'A' or 'V' or 'M' ");
array_emps.filter((employee)=>{
    if (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")) {
        console.log(`Employee Name:${employee.emp_name}`);
    }
});
console.warn("=========================================================================");
console.log("Que 5:Find avg salary of the employee for all the department");
var array1= array_emps.filter((value)=>{
    return value.emp_dept;
});

var array2=[];
array1.forEach((value1) => {
    array2.push(value1.emp_salary);
});
var array3=array2.reduce((a,b)=>{
    return a+b;
});
let avg=array3/array1.length;
console.log(`Average salary of all employee ${avg}`);
// let average=null;
// let sum= array_emps.reduce((runningTotal,value,index)=>{
//     runningTotal=runningTotal+value;
//     if (index==array_emps.length-1) {
//         average=runningTotal/array_emps.length;
//     }
//     return runningTotal;
// });
// console.log(`Sum is:${sum}, Total Elements:${array_emps.length},Average:${average}`);
console.warn("=========================================================================");
console.log("Que 6:Find avg salary for 'IT'dept ");

console.warn("=========================================================================");
var array1= array_emps.filter((value)=>{
    return value.emp_dept==="IT";
});

var array2=[];
array1.forEach((value1) => {
    array2.push(value1.emp_salary);
});
var array3=array2.reduce((a,b)=>{
    return a+b;
});
// let avg=array3/array1.length;
console.log(`Average salary of IT department employee ${array3/array1.length}`);