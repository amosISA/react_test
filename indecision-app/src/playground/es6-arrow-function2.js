// arguments object - no longer bound with arrow functions 

const add = (a, b) => {
    //console.log(arguments);
    return a + b; 
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Lucian',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPLacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPLacesLived());

// Challenge area 
const multiplier = {
    numbers: [3, 6, 4, 5, 34, 543, 534],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number );
    }
};
console.log(multiplier.multiply());