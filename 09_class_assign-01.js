class CarVehicle {
    constructor(ModelName, Type, Color, Price) {
        this.ModelName = ModelName;
        this.Type = Type;
        this.Color = Color;
        this.Price = Price;
    }
    details() {
        console.log(`Details of CarVehicle:${this.ModelName} ${this.Type} ${this.Color} ${this.Price}`);
    }
}
let object1 = new CarVehicle("Honda Amaze", "Petrol", "White Pearl", 1100000);
let object2 = new CarVehicle("Skoda Slavia", "Diezel", "Silver", 1800000);
let object3 = new CarVehicle("Maruti Ciaz", "Diezel", "Blue", 1200000);
let object4 = new CarVehicle("Volkswagen Virtus", "Petrol", "Red", 1200000);
let object5 = new CarVehicle("Hyndai Varna", "Petrol", "Gray", 1500000);
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);
console.warn("---------------------------------------------------------------------------");
class College {
    constructor(Name, Location, State, Fees) {
        this.Name = Name;
        this.Location = Location;
        this.State = State;
        this.Fees = Fees;
    }
    collegeDetails(){
        console.log(`Details of College: ${this.Name} ${this.Location} ${this.State} ${this.Fees}`);
    }
}
const obj1 = new College("Govt College Of Engg", "Chandrapur", "Maharashtra", 150000);
let obj2 = new College("Dartmouth College", "Hanover", "New Hampshire", 32410)
let obj3 = new College("Institude of Chemical Technology", "Mumbai", "India", 100000);
let obj4 = new College("Washington University in St.Louis", "Missouri", "US", 26921);
let obj5 = new College("Yale University", "New Haven Connecticut", "US", 15296);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
function traverseObject(object) {
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key} ${element}`);
    }
}
}
traverseObject(obj1);
console.log("----------------------------------------------------------");
traverseObject(obj2);
console.log("----------------------------------------------------------");
traverseObject(obj3);
console.log("----------------------------------------------------------");
traverseObject(obj4);
console.log("----------------------------------------------------------");
traverseObject(obj5);
console.log(obj1 instanceof College);

console.warn("------------------------------------------------------------------------");
