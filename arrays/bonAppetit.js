function bonAppetit(bill, k, b) {
    // Write your code here
    // let bActual =0;
    let total =0;
    for(let i = 0; i <bill.length; i++) {
        total += bill[i]
        // bActual+=bill[i]
    }
    let bActual = total - bill[k]
    // return bActual
    if(bActual/2 === b){
        return "Bon Appetit"
    }
    else{
        return b - bActual/2
    }
}
console.log(bonAppetit([3,10,2,9],1,12))