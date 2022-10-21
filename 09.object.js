let variable_name="Pune";
let person={
fullName:"Sachin Tendulkar",
age:42,
"isMarried":true,
city:"Mumbai",
address:{
    street:"AS CLUB",
    pin_code:123456,
    city:"PUNE",
    state:"MH"
      },
     eat:function() {
        console.log("I am vegetarian");
     } ,
     walk:function(){
      console.log("He walk every day");
     },
     details:function(){
        let personDetails=`Details are: ${this.fullName}, ${this.age},${this.address.city}`; 
       return personDetails;
 
     }

}
let pDetails=person.details();
console.log(pDetails);
console.log(typeof person);
console.log(person.address);
console.log(person.address.street);

person.eat();
person.walk();
person.address.landmark="Near Main Road";
person.fullName='Sachin Ramesh Tendulkar';//update/modify the fullName
person.pinCode=123456;
person.profession="Angular Developer";//add new keyword
delete person.age;//delete is reserved keyword
console.log(person);
console.log(person.city);
console.log(person.age);

let personFullName=person.fullName;
console.log(personFullName);
console.log(person.fullName);

console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));
console.warn("-----------------------------------------------");
let Person={
   fullName:"Mohit",
   Age:32,
   Gender:"Male",
   isMarried:true
}
console.log("---------------in operator------------------");
console.log(Object.entries(Person));
console.log(Object.keys(Person));
console.log(Object.values(Person));
let isAvailable="fullName" in Person;
console.log("fullName property is available in Person object:",isAvailable);
console.log("city is available in Person object:","city"in Person);
console.log("The type of Person is:",typeof Person);