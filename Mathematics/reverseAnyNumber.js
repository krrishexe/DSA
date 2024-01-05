// let num = 12345

// function reverseAnyNumber(num) {
//     let rem, rev = 0;
//     while (num > 0) {
//         rem = Math.floor(num % 10);                  // this will give the last digit of the num
//         rev = rev * 10 + rem;                       // this formula will generate a new number adding rem to their last digit
//         num = Math.floor(num / 10);                // this will remove the last digit of the num
//     }
//     return rev
// }

// console.log(reverseAnyNumber(num));

let num = 12345

function reverseAnyNumber(num) {
    let strNum = parseInt(num.toString().split('').reverse().join(''))
    
    return strNum
}

console.log(reverseAnyNumber(num)); 