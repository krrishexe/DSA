var addTwoNumbers = function(l1, l2) {
    let arr = [];
    
    let a = Number(l1.toString().split(',').reverse().join(''))
    let b = Number(l2.toString().split(',').reverse().join(''))
    let c = a + b;
    arr.push(c.toString().split('').reverse().join('').split(''))
    return arr[0].map((el)=>{
        return parseInt(el,10)
    })
};

console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))