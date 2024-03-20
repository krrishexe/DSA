interface PersonInterface {
    name: string,
    age: number,
    greet(): string
}

class Person implements PersonInterface {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hi " + this.name + " you are " + this.age + " years old";
    }
}

const krish = new Person('krish',21)
console.log(krish.greet())

export {}