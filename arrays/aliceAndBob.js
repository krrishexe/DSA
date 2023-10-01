let a = [17, 28, 30];
let b = [99, 16, 8];

function aliceAndBob(a, b) {
    let alice = 0;
    let bob = 0;
    let arr = []
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
        else {

        }
    }
    arr.push(alice)
    arr.push(bob)
    return arr
}

console.log(aliceAndBob(a, b));