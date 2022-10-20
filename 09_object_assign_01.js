let teacher={}
console.log(typeof(teacher));
let Teacher={
    Name:"Shrikant Bhunte sir",
    CollegeName:"KGIET Darapur",
    Degrees:{
        Degree1:"CSC",
        Degree2:"PHD",
        Degree3:"Adv Computing",
        Degree4:"Mtech"
    },
    concate:function(){
       let TotalDegrees= `Teachers total degrees are:${this.Degree1}, ${this.Degree2}, ${this.Degree3}, ${this.Degree4}`;
       return TotalDegrees;
    },
    Department:"Mechanical",
    Profession:"Assistant Professor",
    Certificates:{
        Certificate1:"Hacker Rank Participation",
        Certificate2:"Certificate in IFE course",
        Certificate3:"Certificate in Adv Programming"
}
}
console.log(Teacher);
Teacher.Address="Parag Town Ship ";//added teacher address
console.log(Teacher.Address);
Teacher.CollegeName="Kamaltai Gavai Institude College Of Enggineering Darapur";//updated or modified CollegeName
console.log(Teacher);
delete Teacher.Certificate2;//delete the record
console.log(Teacher);
Teacher.Certificates="Ethical Hacking";
console.log(Teacher.Certificates);
console.warn("-------------------------------------------------------------------------------------------------------------------");

