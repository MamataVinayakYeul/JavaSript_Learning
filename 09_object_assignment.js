console.log("Create an empty object with name Teacher");
let TEACHER={

}
console.log(TEACHER);
console.log(typeof (TEACHER));
console.warn("-------------------------------------------------------------------------------------------");
//Think of all the properties that you could add
let Teacher={
   Name:"Gajanan Kharat Sir",
   Age:42,
   College:"Govt College Of Enggineering Chadrapur",
   Qualification:"BE Comp Sci & Engg",
   Address:"Kalewadi Pune",
   Degree:{
      D1:"Enggineering",
      D2:'CSC',
      D3:'PHD',
      D4:'Adv Computing'
   },
   Certificate:{
     1:'Hacker Rank participation',
     2:'Certificate in IFE course',
     3:'Certificate in Adv Programming'
   },
   concate:function(){
      let TotalDegrees= `Teachers total degrees are:${this.D1}, ${this.D2}, ${this.D3}, ${this.D4}`;
      return TotalDegrees;
   }
}
console.warn("-------------------Step 1: Add prperties in teacher object--------------------------");
console.table(Teacher);
console.warn("-------------------Step 2: Add Degree Object in teacher object--------------------------");
console.table(Teacher.Degree);
console.warn("-------------------Step 3: Add certificate object in teacher object-----------------------");
console.log(Teacher.Certificate);
// console.warn("-------------Step 4:Add function as a value which should concat all degree in step2");
// // console.log(TotalDegrees);
console.warn("-------------------Step 5: Add new property in object teacher-----------------------");
Teacher.Company="CodeMind Technology";
console.log(Teacher.Company);
console.warn("Step 6:Modify any existing property and log on console");
Teacher.Qualification="Bacholer Of Enggineering in Comp and Science Enggineering";
console.log(Teacher.Qualification);
console.warn("-------------------Step 7: Delete entry Age from object teacher-----------------------");
delete Teacher.Age;
console.log(Teacher.Age);
console.warn("-----------Step 8: add new entry in nested object certificate of object teacher-----------------------");
Teacher.Certificate="Ethical Hacking";
console.table(Teacher.Certificate);

console.log(Object.entries(Teacher));
console.log(Object.keys(Teacher));
console.log(Object.values(Teacher));

