const arr = ["one", "two", "three", "four", "five", "six"]
let str = "fie"
function searchElement(array, str) {
    for (let digit in array) {
        if (array[digit] === str) {
            return digit
        }
        
    }
    return -1
}
console.log(searchElement(arr,str))