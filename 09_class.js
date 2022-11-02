class Person{
    constructor(fullName,city,age,gender){
        this.fullName=fullName;
        this.city=city;
        this.age=age;
        this.gender=gender
    }
    details(){
        console.log(`Person Details: ${this.fullName} ${this.city} ${this.age} ${this.gender}` );
    }
}
let sachin=new Person("Sachin Tendulkar","Pune",45,"Male");
let rohit=new Person("Rohit Sharma","Mumbai",32,"Male");

// sachin.fullName;
sachin.details();
rohit.details();

console.log(sachin);
console.log(rohit);

console.log("Type of sachin object is:-",typeof(sachin));
console.log("Type of rohit object is:-",typeof rohit);
console.warn("---------------------------------------------------------------");
 class Student{
    constructor(sname,rollNo,schoolName){
    this.sname=sname;
    this.rollNo=rollNo;
    this.schoolName=schoolName;
  }
    details(){
        console.log(`${this.sname} ${this.rollNo} ${this.schoolName}`);
    }
 }
    let riya=new Student("Riya",10,"Vidyabharti College Pune");
    let priya=new Student("Priya",12,"Lokmanya Vidyalaya Akot");
    console.log(riya);
    console.log(priya);
    riya.details();
    priya.details();
//     // console.log(s1 instanceof Student);
//     console.log(sachin instanceof Student);

