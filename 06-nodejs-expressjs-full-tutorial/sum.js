const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class Math {
    constructor() {
        console.log('Object created');
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.Math = Math;

module.exports = {
    sum: sum,
    PI: PI,
    Math: Math,
};
