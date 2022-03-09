class Person {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender ? gender : "";
  }
}

const jy = new Person("hanjy", 31);

const sayHi2 = ({ name, age, gender }: Person) => {
  console.log(`${name} ${age} ${gender}`);
};

sayHi2(jy);

export {};
