const grey = document.getElementById('grey');
const white = document.getElementById('white');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const body = document.querySelector('body')

// grey.onclick = () => {
//     document.body.style.backgroundColor = 'grey'
// }
// white.onclick = () => {
//   document.body.style.backgroundColor = 'white'
// }
// blue.onclick = () => {
//   document.body.style.backgroundColor = 'blue'
// }
// yellow.onclick = () => {
//   document.body.style.backgroundColor = 'yellow'
// }

grey.addEventListener('click',((e)=>{
  console.log(e.target)
    body.style.backgroundColor = e.target.id;
}))
white.addEventListener('click',((e)=>{
  console.log(e.target)
    body.style.backgroundColor = e.target.id;
}))
blue.addEventListener('click',((e)=>{
  console.log(e.target)
    body.style.backgroundColor = e.target.id;
}))
yellow.addEventListener('click',((e)=>{
  console.log(e.target)
    body.style.backgroundColor = e.target.id;
}))

