"use strict";
function createcar(model, manufacturer, ...option) {
    let car = {
        model,
        manufacturer,
    };
    for (let [key, value] of option) {
        car[key] = value;
    }
    return car;
}
console.log(createcar("Toyota", "Corolla", ['Color', 'Red']));
console.log(createcar("Audi", "e-tron", ["Color", "Black"], ["Year", "2022"]));
