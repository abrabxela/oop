class Car {
  constructor(model, mark, country, speed) {
    this.model = model;
    this.mark = mark;
    this.country = country;
    this.speed = speed;
  }
  increaseSpeed(arg) {
    this.speed += arg;
  }
  decreaseSpeed(arg) {
    this.speed -= arg;
  }
}

class Truck extends Car {
  constructor(model, mark, country, speed) {
    super(model, mark, country, speed);
  }
  takeWeight(weight) {
    console.log(`truck ${this.mark} ${this.model} take ${weight} kg.`);
  }
}

class Bus extends Car {
  constructor(model, mark, country, speed) {
    super(model, mark, country, speed);
  }
  takePeople(takePeople) {
    console.log(`bus ${this.mark} ${this.model} take ${takePeople} people.`);
  }
}

class Transporter extends Car {
  constructor(model, mark, country, speed) {
    super(model, mark, country, speed);
  }
  takeCars(takeCars) {
    console.log(`transporter ${this.mark} ${this.model} take ${takeCars} cars.`);
  }
}
