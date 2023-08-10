const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName
  };
};

// console.log(createInstructor('eddie','sandler'))

// const favoriteNumber = 42;
// const firstName="colt"

// const instructor = {
//   [firstName]: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
};

// console.log(instructor.sayBye())


/*Write a function which generates an animal object. The function should accepts 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered.*/

const createAnimal = (species, verb, noise) => {
  return {
    species,
    verb,
    noise
  };
};

// console.log(createAnimal('dog', 'barks', 'ruff'))




