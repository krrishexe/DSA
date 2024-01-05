// So In javascript , Everything is an object !!!

// and the workflow is soething like this : 

// --> (Arrays , Function , Strings)... (Siblings)  (children)
                //     ||
                //     ||
                //  (Object)    ...(parent)
                //     ||
                //     ||
                //   (null)

// To hum agar kisi object (parent) ko koi property dedenge , to vo property uske (Array , function , string) (children) bhi access kar sakte hai. PROTOTYPAL INHERITENCE.

// But same agar hum (children) ko koi property denge to vo property (parent) yani ki Object access nahi kar sakta hi.

// example: 

// 1). If we first add a property in an object. 
// ans. We can access that property inside Array, function and string.

Object.prototype.sayMyName = function(){
    console.log("hello krish")
}
const arr = [1, 2, 3, 4, 5]
const str = "krish"
const hello = () =>{
    return
}
const obj = {
    name:'krish',
}
const User = function(username,price){
    this.username = username
    this.price = price
    return username + " " + price
}
const userOne = new User('krish',1212)

// User.sayMyName()    // all have access to the object property.
// hello.sayMyName()   // all have access to the object property.
// arr.sayMyName()     // all have access to the object property.
// str.sayMyName()     // all have access to the object property.
// obj.sayMyName()     // all have access to the object property.


// 2). But if we add a property to an array , no-one can have access to that property except that array. bcz array is a children of object.

Array.prototype.sayHello = function(){
    console.log("say hello to fellow")
}

// arr.sayHello() // => only array willhave access to it .
// userOne.sayHello    // no access
// str.sayHello()       // no access
// obj.sayHello        // no access

const obj2 ={
    lastname:'yadav'
}
Object.setPrototypeOf(obj,obj2)

// now 'obj' has the access to all the properties of 'obj2'