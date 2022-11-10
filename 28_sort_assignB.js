console.log("Name:Mamata Yeul   Assignment No:B");
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
let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("Que 1:Sort the array_employees in ascending order of employee Id's and log on console Id,Name,Department");
var array1=array_employees.sort((a,b)=>{
    return a.emp_id-b.emp_id;
});
 array_employees.forEach((employee)=>{
    console.log(`Emp_Id:${employee.emp_id},Employee Name:${employee.emp_name},Employee Department:${employee.emp_dept}`);
})
console.warn("=====================================================================================================");
console.log("Que 2:Sort the array_employees in ascending order of employe dept and log Id,Dept & Company");
var array1=array_employees.sort((a,b)=>{
    let fa=a.emp_dept;
    let fb=b.emp_dept;
    if(fa<fb){
        return -1;
    }else if(fa>fb){
        return 1;
    }
    return 0;
});
array1.forEach((employee)=>{
    console.log(`Employee id:${employee.emp_id},Employee Department:${employee.emp_dept},Employee Company:${employee.emp_company}`);

});
console.warn("=====================================================================================================");
console.log("Que 3:Sort the array_employees in descending order of employee salary and log Name,Salary & Company");
var array1=array_employees.sort((a,b)=>{
    return a.emp_salary-b.emp_salary;
});
array1.forEach((employee)=>{
    console.log(`Employee Name:${employee.emp_name},Employee Salary:${employee.emp_salary},Employee Company:${employee.emp_company}`);
});
console.warn("=====================================================================================================");
console.log("Que 4: Sort the array_employees in ascending order of company name and log Company, Id,Name,Salary & dept");
var array1=array_employees.sort((a,b)=>{
    let fa=a.emp_company;
    let fb=b.emp_company;
    if (fa<fb) {
        return -1;
    }else if(fa>fb){
        return 1;
    }
    
});
array1.forEach((employee)=>{
    console.log(`Employee Company:${employee.emp_company},Employee Id:${employee.emp_id},Employee Name:${employee.emp_name},Employee Salary:${employee.emp_salary},Employee Department:${employee.emp_dept}`);
})
console.warn("=====================================================================================================");
