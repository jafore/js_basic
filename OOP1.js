/***********************
 * JavaScript OOP Cheat Sheet
 * Covers: Classes, Objects, Inheritance, Encapsulation, Polymorphism, Prototypes
 ***********************/

/* 1. Constructor Function (Old way - Pre ES6) */
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
  

  
  const person1 = new Person("Alice", 30);
  person1.sayHello();
  
  console.log(Person.prototype.mobile="019");

  console.log(person1.mobile);
  
  
  /* 2. ES6 Class Syntax */
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  const animal = new Animal("Generic Animal");
  animal.speak();
  
  /* 3. Inheritance (Extends + Super) */
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // call parent constructor
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Rex", "German Shepherd");
  dog.speak();
  
  /* 4. Encapsulation (Private Fields using #) */
  class Car {
    #engineNumber;
  
    constructor(brand, engineNumber) {
      this.brand = brand;
      this.#engineNumber = engineNumber;
    }
  
    getEngineNumber() {
      return this.#engineNumber;
    }
  
    setEngineNumber(newNumber) {
      this.#engineNumber = newNumber;
    }
  }
  
  const myCar = new Car("Toyota", "123ABC");
  console.log(myCar.getEngineNumber()); // 123ABC
  myCar.setEngineNumber("456DEF");
  
  /* 5. Polymorphism (Overriding Methods) */
  class Bird {
    fly() {
      console.log("Bird flies.");
    }
  }
  
  class Eagle extends Bird {
    fly() {
      console.log("Eagle soars high.");
    }
  }
  
  const bird = new Bird();
  const eagle = new Eagle();
  bird.fly();
  eagle.fly();
  
  /* 6. Static Methods and Properties */
  class MathHelper {
    static PI = 3.14159;
  
    static square(x) {
      return x * x;
    }
  }
  
  console.log(MathHelper.square(4)); // 16
  console.log(MathHelper.PI); // 3.14159
  
  /* 7. Object Literals */
  const student = {
    name: "John",
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  student.greet();
  
  /* 8. Factory Function */
  function createUser(username, role) {
    return {
      username,
      role,
      describe() {
        console.log(`${this.username} is a ${this.role}`);
      }
    };
  }
  const admin = createUser("admin", "Administrator");
  admin.describe();
  
  /* 9. Prototype Chain Example */
  function Shape() {}
  Shape.prototype.type = "shape";
  
  function Square() {}
  Square.prototype = Object.create(Shape.prototype);
  
  const sq = new Square();
  console.log(sq.type); // shape
  
  /* 10. Getter & Setter */
  class Employee {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  }
  
  const emp = new Employee("Sara");
  console.log(emp.name);
  emp.name = "Mike";
  console.log(emp.name);
  console.log(emp);
  
  