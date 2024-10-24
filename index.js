
class Vehicle {
    constructor(year, brand) {
      this.year = year;
      this.brand = brand;
    }
  
    showInfo() {
      console.log(`Year: ${this.year}, Brand: ${this.brand}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(year, brand, doors, fuelType) {
      super(year, brand);
      this.doors = doors;
      this.fuelType = fuelType;
    }
  
    showInfo() {
      super.showInfo();
      console.log(`Doors: ${this.doors}, Fuel Type: ${this.fuelType}`);
    }
  
    startEngine() {
      console.log(`${this.brand} car engine  started.`);
    }
  }
  
  class ElectricCar extends Car {
    constructor(year, brand, doors, fuelType ,batteryCapacity) {
      super(year, brand, doors, fuelType);
      this.batteryCapacity = batteryCapacity;
    }
  
    showInfo() {
      super.showInfo();
      console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
    }
  
    chargeBattery() {
      console.log(`${this.brand} is now charging. Battery capacity: ${this.batteryCapacity} kWh`);
    }
  }
  
  const vehicle = new Vehicle(2020, 'Generic');
  vehicle.showInfo();
  
  const car = new Car(2021, 'Toyota', 4, 'gasoline');
  car.showInfo();
  car.startEngine();
  
  const electricCar = new ElectricCar(2023, 'Tesla', 4, 100);
  electricCar.showInfo();
  electricCar.chargeBattery();
  