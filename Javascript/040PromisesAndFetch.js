// Promises in javascript.
// it is an object only , that represents the eventual completion or non completion of an asynchronous task.

// ----------------------------------------------------------------

// const promiseOne = new Promise((resolve, reject)=>{           // takes two parameters, resolve and reject
//     console.log("hello world");
//     resolve();          // here we have connected the Promise object and .then method.
// })
// promiseOne.then((resolve, reject)=>{
//     console.log("promise resolved")
// })

// ----------------------------------------------------------------

// new Promise((resolve, reject)=>{
//     setTimeout(() => { 
//         console.log("hello  promise 2 ")
//     }, 2000);
//     resolve()
// }).then((resolve, reject)=>{
//     console.log("promise resolved")
    
// })

// ----------------------------------------------------------------

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("promise resolved")
//     }, 1000);
//     resolve({username:"krish",mail:"test@mail.com"})
// })
// promiseThree.then((user)=>{
//     console.log(user.username)
// })

// ----------------------------------------------------------------

// const promiseFour = new Promise((resolve, reject)=>{
//     let error = true;
//     if(!error){
//         resolve({username:"krish",mail:"test@mail.com"});
//     }
//     else{
//         reject("something went wrong");
//     }
// })
// promiseFour.then((user)=>{
//     console.log(user.username)
//     return user.username;
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("the promise was wither resolved or rejected")
// })


// ----------------------------------------------------------------
// handling promises using async await.

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({language:"js",password:"123"})
//         }
//         else{
//             reject({message:"something went wrong"})
//         }
//     },1000)
// })

// const conusmePromiseFive = async ()=>{
//     try {
//         const response = await promiseFive
//         console.log(response.language,response.password)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// conusmePromiseFive()

// Note :- while using async await to handle promises or connecting databases , we dont have any method of handling errors like in using .then() or .catch(). 
// so we have to manually use trycatch block.

//example:- 


// const res = fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{error})

const fetchFn = async () =>{
    let text = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
}
fetchFn()

