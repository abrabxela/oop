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
  constructor(model, mark, country, speed, takeWeight) {
    super(model, mark, country, speed);
    this.takeWeight = takeWeight;
    console.log(`truck ${mark} ${model} take ${takeWeight} kg.`);
  }
}

class Bus extends Car {
  constructor(model, mark, country, speed, takePeople) {
    super(model, mark, country, speed);
    this.takePeople = takePeople;
    console.log(`bus ${mark} ${model} take ${takePeople} people.`);
  }
}

class Transporter extends Car {
  constructor(model, mark, country, speed, takeCars) {
    super(model, mark, country, speed);
    this.takeCars = takeCars;
    console.log(`transporter ${mark} ${model} take ${takeCars} cars.`);
  }
}
