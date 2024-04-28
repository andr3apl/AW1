"use strict";

function hypotenuse(a, b) {
    const square = x => x * x;
    return Math.sqrt(square(a) + square(b));
}
/*
function hypotenuse(a, b) {
    function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
}*/

//console.log(square(10));
console.log(hypotenuse(3, 4));


"use strict";
function greeter(name) {
    const myname = name;
    const hello = function () {
        return "Hello " + myname;
    }
    return hello;
}
const helloTom = greeter("Tom");
const helloJerry = greeter("Jerry");
console.log(helloTom());
console.log(helloJerry());