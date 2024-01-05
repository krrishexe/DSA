var isPalindrome = function(x) {
    let a = Number(x.toString().split('').reverse().join(''))
    if(a === x){
        return true
    }
    else{
        return false
    }
};
console.log(isPalindrome(10))