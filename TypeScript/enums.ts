const enum seatChoice {       //only three options.
    Aisle,  // index -> 0
    Middle = 10, //index -> 1
    Window,     // index -> 2
    fourth = "fourth"  //index -> 3
}
const hcSeat = seatChoice.fourth
console.log(hcSeat)

// enum Arithmetic {
//     add,
//     sub,
//     mul,
//     div
// }

// function calculate(a: number, b: number, c: Arithmetic) {
//     return 1
// }

// console.log(calculate(1, 2, Arithmetic.mul))
// console.log(calculate(1,2,'mul')) 

export {}