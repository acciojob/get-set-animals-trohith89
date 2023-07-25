class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log("Unknown sound.");
  }
}

class Cat extends Animal {
  constructor() {
    // Since Cat is a subclass of Animal, we call the parent class constructor using super
    super("Cat");
  }

  // Method specific to Cat class
  purr() {
    console.log("purr");
  }

  // Override the makeSound method for Cat
  makeSound() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  constructor() {
    // Since Dog is a subclass of Animal, we call the parent class constructor using super
    super("Dog");
  }

  // Method specific to Dog class
  bark() {
    console.log("Woof!");
  }

  // Override the makeSound method for Dog
  makeSound() {
    console.log("Bark!");
  }
}

// Creating instances of Animal, Cat, and Dog
const animal = new Animal("Unknown");
const cat = new Cat();
const dog = new Dog();

// Using getters and methods
console.log(animal.species); // Output: Unknown
console.log(cat.species); // Output: Cat
console.log(dog.species); // Output: Dog

animal.makeSound(); // Output: Unknown sound.
cat.makeSound();    // Output: Meow!
dog.makeSound();    // Output: Bark!

cat.purr(); // Output: purr
dog.bark(); // Output: Woof
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
