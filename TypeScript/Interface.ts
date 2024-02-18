interface User {
    readonly dbId: string,
    email: string,
    userId: number
    gender?: boolean
    func: () => string             // 2 types to decalre functions.
    // func(): string
    getCoupon(coupon: string,value:number): number     // return type number
}

//reopening of the interfaces
//agar upar kuch add karna bhul gaye to dubara redecalre karke neeche add kardo.

interface User {
    githubToken : string
}

//we can also copy one interface properties to another (JUST LIKE CLASSES)

interface Admin extends User{
    role:"admin" | "learner" | "TA"
}

let krish: User = {
    dbId: "krish",
    email: 'a@k.com',
    userId: 123,
    func: () => {
        return "krish"
    },
    getCoupon: (coupon:'krishxyz',off:20) => {
        return Math.random() * 100
    },
    githubToken:"githubxyz"
}

// let anotherUser : Admin = {
//     dbId:"helo213",
//     role:"TA",
//     //...similarly all properties
// }