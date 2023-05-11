"use strict";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("HOLA!");
    }
}
greet(null);
greet("Piotr");
greet(undefined);
//# sourceMappingURL=index.js.map