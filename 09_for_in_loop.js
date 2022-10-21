const mohitPerson={
    FullName:"Sachin Tendulkar",
    Age:42,
    "isMarried":true,
    city:"Pune"
}
for (const key in mohitPerson) {
    if (mohitPerson.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}
console.warn("------------------------------------------------------------------");
//We can also write above for in loop without if loop
for (const key in mohitPerson) {
    const element = mohitPerson[key];
    console.log(element);  
}