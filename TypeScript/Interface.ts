interface User {
    readonly dbId: string,
    email: string,
    userId: number
    gender?: boolean
    func: () => string             // 2 types to decalre functions.
    // func(): string
    getCoupon(coupon: string, value: number): number     // return type number
}

//reopening of the interfaces
//agar upar kuch add karna bhul gaye to dubara redecalre karke neeche add kardo.

interface User {
    githubToken: string
}

//we can also copy one interface properties to another (JUST LIKE CLASSES)

interface Admin extends User {
    role: "admin" | "learner" | "TA"
}

let krish: User = {
    dbId: "krish",
    email: 'a@k.com',
    userId: 123,
    func: () => {
        return "krish"
    },
    getCoupon: (coupon: 'krishxyz', off: 20) => {
        return Math.random() * 100
    },
    githubToken: "githubxyz"
}

// let anotherUser : Admin = {
//     dbId:"helo213",
//     role:"TA",
//     //...similarly all properties
// }

interface askFromHim {
    height: number,
    weight: number,
    bodyCount: number
}

interface personInterface {
    name: string,
    age: number,
    body: askFromHim
}

function tellBodyCount(person: personInterface) {
    return "congrats! you have " + person.body.bodyCount + " bodyCount"
}
console.log(tellBodyCount({
    name: 'krish', age: 21, body: {
        height: 175,
        weight: 68,
        bodyCount: 12
    }
}))


// difference between a type and interface ?

// they both can be used interchangabely, 
// interfaces can be implemented with classes but types cant be implemented with classes and
//  we can extend interfaces but we cant extend types.
// union | , and & can be used in types but not in interfaces. ex:

// type circle = {
//     radius :number
// }
   
// type square = {
//     side :number
// }
// type rectangle = {
//     length :number,
//     breadth:Number
// }

// type shape = square | circle | rectangle;
// type shape1 = square & circle & rectangle;


// function getArea(shape:square | circle | rectangle):string{
//     return "Area of the given shape is x"
// }

// console.log(getArea({
//     side:4
// }))