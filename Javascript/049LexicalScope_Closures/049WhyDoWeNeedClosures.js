// To understand closures , first we need to understand Lexical Scoping.
//Lexical Scoping.

// function LexicalScoping(str){
//     let someVar = true;
//     let otherVar = str;
//     function innerFunc(str){
//          let total = someVar+ otherVar
//          console.log(total)
//     }
//     innerFunc(str)
// }
// LexicalScoping("krish")

// Here we can access the variables declared in the outer function, this is called lexical scope.

// Now Closures :p
// Example:
// Suppose we want 500 buttons that changes the color of body background.
// Then we cant just do that by old method.

// document.getElementById('purple').addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'purple'
// })

// document.getElementById('skyblue').addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'skyblue'
// })

// 2nd method:

function bgChanger(color){
    // document.body.style.backgroundColor = `${color}`


    // when we are returning a new function here, notice that the outer function variable(color) is gone with it.
    // but here in inner function we are using that variable color.
    // this is happening because of closures.
    
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

// we cant pass the color value directly like this because it will automatically execute the function whenever the page loads.

document.getElementById('purple').addEventListener('click',bgChanger("purple")) 

document.getElementById('skyblue').addEventListener('click',bgChanger("skyblue"))