class Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say(): void {
    console.log(`${ this.name } says: his age is ${ this.age }`);
  }
}

let one: Person = new Person('Lee', 29);
one.say();