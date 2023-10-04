const grades = [73,67,38,33]
// console.log(Math.ceil(34/5)*5)
function gradingStudents(grades){
    const newArr =[]
    let difference;
    let multiple;
    for(let i=0; i<grades.length; i++){
        multiple = Math.ceil(grades[i]/5) * 5;
        difference = multiple - grades[i]
        // console.log(multiple, difference)
        if(grades[i] < 38 || difference >=3){
            newArr.push(grades[i])
        }
        else if(difference <3){
            newArr.push(multiple)
        }
    }
    return newArr
}
console.log(gradingStudents(grades))