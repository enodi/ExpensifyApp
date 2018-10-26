// const getFirstName = fullname => fullname.split(" ")[0];
// console.log(getFirstName("Andrew Mead"))

// const add = (a, b) => {
//   // console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1));

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4.6, 8],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
