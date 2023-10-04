// class User {
//     constructor(username , password, email){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     //Class banate time function keyword nahi likhte.
//     //par hai ye function hi.
//     passHasher(password) {
//         return `${this.password}abc123`
//     }
//     capitaliseUser(username){
//         return this.username.toUpperCase();
//     }
// }

// const userOne = new User('krish','1212','krish@yadav.com')
// console.log(userOne.passHasher())
// console.log(userOne.capitaliseUser())


// ----------------------------------------------------------------
// INHERITENCE

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is : ${this.username}`)
    }
}

class Student extends User{                 // Hamesha Second parameter (User) parent class hoti hai.
    constructor(username, birthday, course){
        super(username)                    // iska sirf ye mtlb hai ki username ki value ye User class se laa raha hai.
        this.birthday = birthday;
        this.course = course;
    }

    addCourse(course){
        console.log(`${this.username} was added to ${this.course}`)
    }
}

const studentOne = new Student('krish','14 Nov', 'science')
const studentTwo = new User('krish')

// studentOne.logMe()  // children ke pass parent ki properties ka access hota hai. 
// studentTwo.addCourse()  // par parent ke pass children ki properties ka access nahi hota hai.

// console.log(studentOne === Student) false
// console.log(studentOne instanceof Student) true


// ----------------------------------------------------------------

// Static keyword.

class Example extends User{
    constructor(username){
        super(username)
    }
    logMe(){
        console.log(`${this.username} is username.`)
    }
    static randomGenerateId(){
        return '123'
    }
}

const userOne = new Example('krish');
userOne.logMe();
console.log(userOne.randomGenerateId())  // here it will not work bcz of static. 

// Note:- Static keyword use karne ke baad vo property normal log access nahi kar sakte , usecase is jab hum logo ko nahi dikhana chahte id's in database


// ----------------------------------------------------------------

// class nameofclass{
//     constructor(saari properties){
//         // properties set kardo
//         this.properties = properties;
//     }
//     koiFunction(){

//     }
// }

// const hello = new name("hello");