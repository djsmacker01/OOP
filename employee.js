class Employee {
  constructor(name, age, position, department, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}, nice to meet you.`);
  }

  isBirthday() {
    this.age += 1;
    console.log(
      `Happy Birthday, ${this.name}! You are now ${this.age} years old.`
    );
  }

  promote(newPosition) {
    this.position = newPosition;
    console.log(
      `${this.name} has been promoted! New position: ${this.position} with a Salary of ${this.salary}`
    );
  }

  resign() {
    console.log(`${this.name} has resigned from the company.`);
  }
}


const emp1 = new Employee("Alice", 30, "Developer", "Engineering");
const emp2 = new Employee("Bob", 40, "Manager", "Sales");

emp1.greet();
emp1.isBirthday();
emp1.promote("Senior Developer");
emp1.resign();

emp2.greet();
emp2.isBirthday();
emp2.promote("Director of Sales");
emp2.resign();
