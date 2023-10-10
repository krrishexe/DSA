function birthday(s, d, m) {
    // Write your code here

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (m > 1) {
            if (s[i] + s[i + 1] === d) {    // make this dynamic , if the value of m =3 , then it should be adding 3 numbers also.
                count++
            }
        }
        else {
            if (s[i] === d) {
                count++
            }
        }
    }
    return count


}
console.log(birthday([1, 2, 1, 3, 2], 3, 2)) 