console.log("hello")
//string
const user: string = "krish";
user.toLowerCase()
console.log(user);

//Number
const num: number = 22;
num.toExponential(2)
console.log(num)

//Any 
let hero: string;

function hello() {
    return "34"
}
hero = hello()

// functions

let myName = function (str: string) {
    return str
}
console.log(myName("krish"))

function toUpperCase(str: string) {
    return str.toUpperCase()
}
const sayMyName = (username: string, password: number) => {
}
sayMyName('krish', 88)
console.log(toUpperCase("4"))



// A better way to write functions  IMPORTANTIMPORTANTIMPORTANTIMPORTANT 
function addTwo(num: number): number {
    // return "heelo"  ==> Nobodys stopping you from returning anything.
    return num + 2
}
console.log(addTwo(5))

const heroes = ["a", "b", "c"]
let newHeroes = heroes.map((elem): string => {
    return `${elem} is hero`
})

//type void matlab kuch return nnahi karega.

function clgErr(err: string): void {
    console.log("error is " + err)
    // return 2 will give an error.
}



// export { }