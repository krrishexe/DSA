// Events listener .

// document.addEventListener('click', function(e){
//     console.log("clicked on something")
// },false)                 -->  the default value is false

document.addEventListener('mouseover',(e)=>{
    console.log("catch the event" + e.target)
    e.stopPropagation()       // prevents the propagation , stops the bubbling.
},true)