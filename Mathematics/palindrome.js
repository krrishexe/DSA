let num = 8

function palindrome(num){
    let rem , rev = 0 ;
    let temp = num;
    while(temp>0){
        rem = Math.floor(temp%10)
        rev = rev * 10 + rem;
        temp = Math.floor(temp/10)
    }
    // it will reverse the given number num and now will compare to the original number. NOW WILL RETURN A STRING VALUE.
    if(rev === num){
        console.log("Yes its a palindro1me!");
    }
    else{
        console.log("No palindrome!");
    }
}
console.log(palindrome(num));