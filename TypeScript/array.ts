const heroes: string[] = ["a", "b", "c"]
const newArr: Array<number> = []     // generics 

type User = {
    name: string
    age: number
    isPaid: boolean
}

const newUsers: User[] = []

newUsers.push({ name: "krish", age: 32, isPaid: false })

//2d arrays
const matrix: number[][] = [
    [1, 2, 3, 4, 5],
]

matrix.push([1, 2, 3])
console.log(matrix)





type arr = number[] | string[]
// type arr = (number | string)[]
function getFirstElement(arr: arr): (string | number) {
    return arr[0]
}
const arr1 = [1, 2, 3]
const arr2 = ["1", "2", "3"]

const ans = getFirstElement(arr1)
console.log(ans)


function getFirstElement1 <T>(arr:T[]){
    //T stands for template.
}








export { }