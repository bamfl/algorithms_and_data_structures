// OOP - объктно ориентированное программирование
// Инкапсуляия - скрытие свойств начинающихся с _, работа с ними через getters и setters
class Human {
  constructor(name, birthYear) {
    this._name = name;
    this._birthYear = birthYear;
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  greeting() {
    return 'Hello';
  }
}

const human = new Human('Dmtriy', 1994);
console.log(human);
console.log(human.name);
console.log(human.age);
human.name = 'Ksenia';
console.log(human);

// Наследование - класс Employee наследует св-ва и методы расширяемого класса Human
class Employee extends Human {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  greeting() {
    return `Hello, I'm an ${this.job}`;
  }
}

const accountant = new Employee('Eugen', 1968, 'Door fitter');
console.log(accountant);
console.log(accountant.name);
console.log(accountant.age);
accountant.name = 'Marina';
console.log(accountant);

// Полимофризм - разное результат работы одинаковых функций, здесь метода greeting
class Programmer {
  greeting() {
    return 'Hello World';
  }
}

const programmer = new Programmer();

const people = [human, accountant, programmer];
people.forEach(person => console.log(person.greeting()));
