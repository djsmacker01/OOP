// Object Oriented Programming

let vehicle1 = {
  make: "Toyota",
  model: "Corrolla",
  color: "blue",
  maxSpeed: 200,

  startEngine: function () {
    console.log("The car engine is starting");
  },

  stopEngine: function () {
    console.log("The car engine stopped");
  },
};
console.log(vehicle1.make);
console.log(vehicle1.startEngine());

let vehicle2 = {
  make: "Citroen",
  model: "C4",
  color: "red",
  maxSpeed: 180,
  startEngine: function () {
    console.log("The car engine is starting");
  },

  stopEngine: function () {
    console.log("The car engine stopped");
  },
};

console.log(vehicle2.make); //output: Citroen
console.log(vehicle2.startEngine());

// Create a class in js

class Vehicle {
  // Properties
  /*
    make
    model
    color
    maxSpeed
    */

  // constructor => special method
  constructor(make, model, color, maxSpeed) {
    // Define the properties of the class using the this keyword
    this.make = make; // this.make => refers to the property  we assign the value of the p[arameter make
    this.model = model;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
  }

  // methods => actions, behaviour of our object

  startEngine() {
    console.log("Engine starts");
  }

  showDescription() {
    console.log(
      `This car is a ${this.make}, the model is ${this.model}, the colour is ${this.color}`
    );
  }

  stopEngine() {
    console.log("Engine stops");
  }

  increaseSpeed() {
    this.speed = this.speed + 10; // We are updating our speed property
    return this.speed; // returning the value of the property + 10
  }
}

vehicle1 = new Vehicle("Subaru", "Impreza", "green", 230);
console.log(vehicle1.make);
console.log(vehicle1.model);
console.log(vehicle1.color);
console.log(vehicle1.maxSpeed);

vehicle2 = new Vehicle("Peuge0t", "3008", "Black", 150);
console.log(vehicle2.make);
console.log(vehicle2.model);
console.log(vehicle2.color);
console.log(vehicle2.maxSpeed);

vehicle1.showDescription();
vehicle1.startEngine();
console.log(vehicle1.speed); // before increasing the speed
console.log(vehicle1.increaseSpeed());
console.log(vehicle1.speed); // Aftyer increasing the speed
