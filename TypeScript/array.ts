const heroes: string[] = ["a", "b", "c"]
const newArr: Array<number> = []

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

export { }