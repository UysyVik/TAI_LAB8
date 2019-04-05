"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    addition(complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    }
    subtraction(complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    }
    module() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log(this.real + " + " + this.imaginary + "i");
    }
}
let complex1 = new Complex(2, 2);
let complex2 = new Complex(3, 5);
let complex3 = complex1.addition(complex2);
complex3.toString();
let complex4 = complex3.subtraction(complex1);
complex4.toString();
let moduleComplex = complex4.module();
console.log(moduleComplex);
