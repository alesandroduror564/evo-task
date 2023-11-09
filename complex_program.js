/*
   Filename: complex_program.js
   Description: JavaScript code for a complex program that simulates a virtual ecosystem with multiple organisms and their interactions.
*/

// Define the Organism class
class Organism {
  constructor(name, species, age, health) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
  }

  eat(food) {
    console.log(`${this.name} (${this.species}) is eating ${food}.`);
  }

  reproduce(partner) {
    const offspring = new Organism(`${this.name}'s child`, this.species, 0, 100);
    console.log(`${this.name} (${this.species}) and ${partner.name} (${partner.species}) have a child: ${offspring.name} (${offspring.species}).`);
    return offspring;
  }

  die() {
    console.log(`${this.name} (${this.species}) has died.`);
  }
}

// Define the Animal class, a subclass of Organism
class Animal extends Organism {
  constructor(name, species, age, health, speed, diet) {
    super(name, species, age, health);
    this.speed = speed;
    this.diet = diet;
  }

  move(direction) {
    console.log(`${this.name} (${this.species}) is moving ${direction}`);
  }

  makeSound() {
    console.log(`${this.name} (${this.species}) is making a sound.`);
  }
}

// Define the Plant class, a subclass of Organism
class Plant extends Organism {
  constructor(name, species, age, health, type) {
    super(name, species, age, health);
    this.type = type;
  }

  grow() {
    console.log(`${this.name} (${this.species}) is growing.`);
  }
}

// Create instances of organisms
const lion = new Animal("Leo", "Lion", 5, 100, "Fast", "Carnivore");
const zebra = new Animal("Ziggy", "Zebra", 3, 90, "Medium", "Herbivore");
const grass = new Plant("Gracey", "Grass", 1, 100, "Deciduous");

// Interact with the organisms
lion.eat(zebra.name);
zebra.move("north");
grass.grow();

const offspring = lion.reproduce(zebra);
offspring.move("south");
offspring.die();

// More code...

/* 
   More complex program code...
   ...
*/

// End of code