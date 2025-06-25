"use strict";
//basic type defining
/*let x: number = 1;
console.log(x)
*/
function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
}
sum(2, "asd");
