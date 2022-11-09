console.log("Name:Mamata Yeul   Assignment No:C --Use only forEach()");
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
let array_employees= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(array_employees);
console.log("Que 1:Find out TCS Employee details log only name and company on console");
array_employees.forEach( (employee)=>{
    if (employee.emp_company=="TCS") {
        console.log(`Employee Working in TCS are:Employee Name:${employee.emp_name} ,Employee Company:${employee.emp_company}`);
    }
});
console.warn("-------------------------------------------------------------------------------------------");
console.log("Que 2:Find employees salary>=50000");
array_employees.forEach((employee)=>{
    if (employee.emp_salary>=50000) {
        console.log(`Employee Id:${employee.emp_id},Employee Name:${employee.emp_name},Employee Department:${employee.emp_dept},Employee Salary:${employee.emp_salary},Employee Company:${employee.emp_company}`);
    }
});
console.warn("-------------------------------------------------------------------------------------------");
console.log("Que 3:Find the sum of all employees salary and log on console");
let sum=0;
array_employees.forEach((employee)=>{
    
    sum=sum+employee.emp_salary;
});
console.log(`Sum of all employee salary is:${sum}`);
console.warn("-------------------------------------------------------------------------------------------");
console.log("Que 4:Find the average salary and log on console(Avg=Total Salary/Number of employees)");
let sum1=0;
let avgSal;
array_employees.forEach((employee)=>{
    Total_Salary=sum1+employee.emp_salary
    let NumberOfemployees=array_employees.length;
    avgSal=Total_Salary/NumberOfemployees;
});
console.log(`The Average salary of employee is:${avgSal}`);
console.warn("-------------------------------------------------------------------------------------------");
console.log("Que 5:Find the 'IT' and 'HR' department emp whose salary>=75000 and log complete employee details on console ");
array_employees.forEach((employee)=>{
if (employee.emp_dept=="IT" && employee.emp_dept=="HR"||employee.emp_salary>=75000) {
    console.log(`The'IT' and 'HR' department emp whose salary>=75000:Employee Id:${employee.emp_id},Employee Name:${employee.emp_name} ,Employee Department:${employee.emp_dept},Employee Company:${employee.emp_company},Employee Salary:${employee.emp_salary}`);
}
});
console.warn("-------------------------------------------------------------------------------------------");