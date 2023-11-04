// Programación orientada a objetos
// Polimorfismo

// ------------------
//      Original
// ------------------
class Person {
  public name: string = "";
  public role: string = "";
}
class BasketballPlayer extends Person {
  public setName(name: string) {
    this.name = name;
    this.role = "BasketBall Player";
  }
  public getName() {
    return `User name: ${this.name} Role: ${this.role}`;
  }
}

class GolfPlayer extends Person {
  public setName(name: string) {
    this.name = name;
    this.role = "Golf Player";
  }
  public getName() {
    return `User name: ${this.name} Role: ${this.role}`;
  }
}
const person1 = new BasketballPlayer();
const person2 = new GolfPlayer();
person1.setName("Kevin Odongo");
person2.setName("Kevin Odongo");
console.log(person1.getName());
console.log(person2.getName());

// ------------------
//      Mejorado
// ------------------
class Person2 {
  constructor(private name: string, private role: string) {}

  public getNameAndRole() {
    return `User name: ${this.name} Role: ${this.role}`;
  }
}
class BasketballPlayer2 extends Person2 {
  constructor(name: string) {
    super(name, "Basketball Player");
  }
}

class GolfPlayer2 extends Person2 {
  constructor(name: string) {
    super(name, "Golf Player");
  }
}

const person3 = new BasketballPlayer2("Kevin Odongo");
const person4 = new GolfPlayer2("Kevin Odongo");
console.log(person3.getNameAndRole());
console.log(person4.getNameAndRole());
