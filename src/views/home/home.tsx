import React, { FunctionComponent } from 'react';

import homeStyles from './home.css';

interface Named {
  name: string;
  surname?: string | boolean;
}

interface GreetAble extends Named {
  greet: (phrase: string) => void;
}

class Person implements GreetAble {
  constructor(public name: string, public surname: boolean) {}
  greet() {
    console.log(`Hi ${this.name} ${this.surname}!`);
  }
}

const person = new Person('John', true);

person.greet();

enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const Home: FunctionComponent = () => {
  let name = 'John';
  let age = 35;
  let single = true;

  let mix: (string | number)[];

  mix = ['John', 'Doe', 25114452];

  console.log(Role.ADMIN);
  console.log(Role.USER);
  console.log(Role.AUTHOR);

  const add = (a: number, b: number): number => a + b;

  let myFunction: (a: number, b: number) => number;

  myFunction = add;

  console.log(myFunction(3, 2));

  return (
    <div className={homeStyles.container}>
      <div data-testid="message">Hello World!</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{single.toString()}</div>
      <div>{`Full name: ${mix[0]} ${mix[1]} (${mix[2]})`}</div>
    </div>
  );
};

export default Home;
