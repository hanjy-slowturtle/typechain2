interface Person {
  name: string;
  age: number;
  gender: string;
}

const name = "Hanjy",
  age = 31,
  gender = "male";

const person: Person = {
  name: "Hanjy",
  age: 31,
  gender: "male",
};

const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

const sayHi2 = ({ name, age, gender }: Person) => {
  console.log(`${name} ${age} ${gender}`);
};

sayHi(name, age, gender);
sayHi2(person);

export {};
