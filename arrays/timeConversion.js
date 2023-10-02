
const s = '12:00:00PM'
const s1 = '07'
// console.log(Number(s1))
// console.log(Number(s.slice(0,2)))

function timeConversion(s){
    if(s.slice(-2) === 'PM' && Number(s.slice(0,2)) < 12){
        let num = Number(s.slice(0,2))
        return ((num+12) + s.slice(2,-2))
    }
    else if(s.slice(-2) === 'AM' && Number(s.slice(0,2)) === 12){
        let num1 = Number(s.slice(0,2))
        return ((num1-12) + s.slice(2,-2))
    }
    else{
        return s.slice(0,s.length -2)

    }

}
console.log(timeConversion(s))