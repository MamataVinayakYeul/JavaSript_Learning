console.log("Name:Mamata Yeul   Assignment No:02");
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
console.log("--------------------------------------------------------");
const array_employees= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.warn("----------------Question 1: Print employee name having company TCS---------------------------------");
for (const employee of array_employees) {
    if (employee.emp_company==="TCS") {
        console.log(`Employee Name:${employee.emp_name} ,Company:${employee.emp_company}`); 
    } 
}
console.warn("----------------Question 2: Print employee name and dept having dept=Finance---------------------------------");
for (const employee of array_employees) {
    if (employee.emp_dept==="Finance") {
        console.log(`Employee Name:${employee.emp_name} ,Department:${employee.emp_dept}`); 
    } 
}
console.warn("----------------Question 3: Print employee name who's name starts with R---------------------------------");
for (const employee of array_employees) {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee Name:${employee.emp_name}`); 
    } 
}
console.warn("----------------Question 4: Print employee who's salary >70000---------------------------------");
for (const employee of array_employees) {
    if (employee.emp_salary>70000) {
        console.log(`Employee Name:${employee.emp_name} ,Company:${employee.emp_company},${employee.emp_salary}`); 
    } 
}
console.warn("----------------Question 5: Print employee who's salary >=500000 and dept=IT---------------------------------");
for (const employee of array_employees) {
    if (employee.emp_salary>=50000 &&employee.emp_dept=="IT") {
        console.log(`Employee Details:-Employee Id:${employee.emp_id},Employee Name:${employee.emp_name},
        Department:${employee.emp_dept},Salary:${employee.emp_salary},Company:${employee.emp_company}`); 
    } 
}
console.warn("----------------Question 6:Print employee who's company=Infy---------------------------------");
for (const employee of array_employees) {
    if (employee.emp_company=="Infy") {
        console.log(`Employee Details:-Employee Id:${employee.emp_id},Employee Name:${employee.emp_name},
        Department:${employee.emp_dept},Salary:${employee.emp_salary},Company:${employee.emp_company}`); 
    } 
}


