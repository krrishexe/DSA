// const user = {
//     name: "helo",
//     age: 21,
//     isPaid: false,
// }
// type User = { name: string, age: number, isPaid: boolean }

// const createUser = (user:User): { name: string, age: number } => {
//     return { name: "krish", age: 32 }
// }
// createUser(user)


type User = {
    readonly _id: string,
    name: string,
    age: number,
    isSignedIn?: boolean  //optional : pass nahi karoge to bhi chalega.
}
const myUser:User = {
    _id : "abc123",
    name:"krish",
    age:32,
    // isSignedIn:true
}
myUser.name = "yadav"
// myUser._id = "1222"
const createUser = (usr : User) : {name:string,age:number} =>{
    return {name:"krish",age:22}
}

createUser(myUser)


export { }