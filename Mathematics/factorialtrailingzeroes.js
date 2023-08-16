function factorialTrailingZeroes(num) {

    let factorial = 1;
    for (let i = 2; i < num; i++) {
        factorial *= i;
    }
    let res = 0;
    while ((Math.floor(factorial % 10)) == 0) {
        res++;
        factorial = Math.floor(factorial / 10)
    }
    return `${res} trailing zeroes`;

}
console.log(factorialTrailingZeroes(10))