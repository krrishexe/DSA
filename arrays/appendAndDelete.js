function appendAndDelete(s, t, k) {
    let convert = s.split('')
    let original = t.split('')
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (convert.join('') === original.join('')) {
            break
        } else {
            convert.pop()
            count++
        }
    }

    console.log(count)
    if (convert.join('') === t && count <= kpr) {
        return 'Yes'
    } else {
        return 'No'
    }
}
console.log(appendAndDelete('hackerhappy', 'hacker', 9))



















// if (convert[i] != original[i]) {
//     console.log(convert[i], i)
//     convert.splice(i,1)
//     count++
// }