// console.log(this)
// const user ={
//     username: "krish",
//     price:120,
//     welcome: function hello(){
//         console.log(this.username+" Welcome")
//     }
// }
// user.welcome()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function username(){
//     const user = "krish"
//     console.log(this.user)      // function ke andar this kaam nahi karta, only in objects.
// }
// username()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// practice
// function addAllNumber(...num){
//     console.log(num)
//     let sum =0
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + num[i]
//     }
//     console.log(sum)
// }
// addAllNumber(2,3,4,8,9,1,1,2,3,4,5,6,7)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                            // Two types of function declarations.
// hello()
// function hello(){
//     console.log("hello world!")
// }

// printHello()
// const printHello = function printHello(){
//     console.log("hello earth")
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrow functions

// const fun = (num1, num2)=>{
//     return num1 +num2
// }
// console.log(fun(1,2))

// Implicit Return :(ek hi line me pura statement)
// const multiplyTwo = (num1,num2) => (num1 * num2)

// NOTE:- IF WE ARE USING {} THEN WE HAVE TO EXPLICITLY TYPE RETURN KEYWORD, 
//     & IF WE ARE USING () THEN WE DONT HAVE TO TYPE RETURN.               --> USE IN REACT.


