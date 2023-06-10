//Part 1 

//let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
//myFirstVehicle.honk(); // "Beep."


class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

honk(){
    return `Beep`;
}

toString(){
    return `The vechicle is a ${this.make} ${this.model} from ${this.year}`;
}

}
//let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
//myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."


//Part 2

//Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.
//let myFirstCar = new Car("Toyota", "Corolla", 2005);
// myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// myFirstCar.honk();     // "Beep."
// myFirstCar.numWheels;  // 4

class Car extends Vehicle { //extends grabs Vehicle methods
    constructor(make,model,year){
        super(make,model,year)//super grabs all of .this from above
            this.numWheels = 4;
        
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels= 2;
        
    }

// Part Three
// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

revEngine(){
    return `Vroom!`;
}

}

//Part Four
//Create a class for a Garage. It should have a property called ***vehicles*** which will store an array of vehicles, and a property called ***capacity*** which is a number indicating how many vehicles will fit in the garage. When you create a garage, ***vehicles*** will always be empty; you only need to provide the ***capacity***.
// A garage should also have an ***add*** method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is *not* a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”


class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return `Only vehicles are allowed in here`;
        }
        if(this.vehicles.length >= this.capacity){
            return `Sorry, were full`;
        }
        this.vehicles.push(newVehicle);
        return `Vehicle added!`;
    }
}
