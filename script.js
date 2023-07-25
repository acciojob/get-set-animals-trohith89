class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:
const cat = new Cat("Cat");
const dog = new Dog("Dog");

console.log(cat.species); // Output: "Cat"
cat.makeSound(); // Output: "Some generic sound" (inherited from Animal)
cat.purr(); // Output: "purr"

console.log(dog.species); // Output: "Dog"
dog.makeSound(); // Output: "Some generic sound" (inherited from Animal)
dog.bark(); // Output: "woof"
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
