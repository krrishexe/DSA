function countingValleys(steps, path) {
    // Write your code here
    let mountain = 0
    let vallyes = 0
   for(let i = 0 ; i < steps ; i++) {
    if(path[i] === 'U'){
        mountain++;
        if(mountain === 0) {
            vallyes++;
        }
    }
    else{
        mountain--;
    }
   }
   return vallyes;
}
console.log(countingValleys(8 ,"UDDDUDUU"))