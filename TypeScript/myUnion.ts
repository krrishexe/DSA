let score: number | string = 32;
score = "44"

type Child = {
    name: string
    age: number
}
type Adult = {
    name: string
    age: number
    gender: 'Male' | 'Female'
}

function identifyUser(user: Adult): string {
    if (user.gender == "Male") {
        return "its male"
    } else if (user.gender == "Female") {
        return "its female"
    }
    else {
        return "please provide correct gender"
    }
}

console.log(identifyUser({
    name: "krish",
    age: 21,
    gender: "Male"
}))

const numbers: number[] = [1, 2, 3];
const strings: string[] = ["1", "2", "3"];

// Dono ek sath ?

const data: (string | number)[] = ["1", 2, "3"];

// Choices ?

let airplaneSeat: "Aisle" | "Middle" | "Window";
// airplaneSeat = "crew"



export { }