// Do Js really have classes ?
// - No, js is a prototype based language that does not have classes. it is just syntactic sugar that was introduced in ES6. 

// OOPS: (Object Oriented programming)

// now what is an object ?
// collection of properties and methods.

// Parts of oops :- 

// Object Literal 
// constructor
// prototypes
// classes
// Instances(new, this)

// &&&&&&&

// (4 pillars of oops:)
// -abstraction,
// -encapsulation,
// -inhertitence,
// -polymorphism.

//example

const obj ={
    username : 'krish',
    age:12,
    getData: function() {
        // console.log("object"+ age)  // here if we write only age , then it will give an error of age is not defined.
        // so we use 'this' keyword , this means we are talking about the 'current Context'.  

        console.log(this)
        console.log(this.age)

    }
}

// console.log(obj.getData())

// ----------------------------------------------------------------

//Constructor function

// const promiseOne = new Promise();
// const Date = new Date()
// here the 'new' keyword is the constructor function.
// ki hume 'ek naya' promise dedo ya 'ek nayi' date dedo.
// ----------------------------------------------------------------


function User(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
    
    return this;
}
// console.log(User()) --> undefined
// Why use 'new' or constructor function?
// agar hum ye 'new' use nahi karenge to cheeze overwrite ho jaati hai , purani cheeze jinki hume jarurat thi vo overwrite ho jati hai.

// const userone = User("krish",1212,'k@mail.com');
// const usertwo = User("yadav",4444,'k@mail.com');
// console.log(userone.password)

//so instead of the following method we use the constructor function new .


const userone = new User("krish",1212,'k@mail.com');
const usertwo = new User("yadav",4444,'k@mail.com');
// console.log(userone.password)
// console.log(usertwo)


// NOTE:- whenever we use new 
// 1). an empty object gets created. which is called 'instance'. 
// 2). a constructor function gets called.
// 3). all the arguments get packed or get injected into that empty object
