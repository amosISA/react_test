'use strict';

// arguments object - no longer bound with arrow functions 

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'Lucian',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPLacesLived: function printPLacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPLacesLived());

// Challenge area 
var multiplier = {
    numbers: [3, 6, 4, 5, 34, 543, 534],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};
console.log(multiplier.multiply());
