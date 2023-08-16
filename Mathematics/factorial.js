function factorial(num){
    if(num >= 1){
        let result =1;
        result = num*factorial(num-1)
        return result
    }
    else{
        return 1
    }
}
console.log(factorial(5));