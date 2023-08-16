const arr = ["one", "two", "three", "four", "five", "six"]
let str = "thre"
function searchElement(array, str) {
    for (let digit in array) {
        if (array[digit] === str) {
            return true
        }
        else{
            return false
        }
    }
}
console.log(searchElement(arr,str))