function angryProfessor(k, a) {
    // Write your code here
    let threshold = 0;
    let arr =[]
    for(let student of a){
        if(student <= threshold){
            arr.push(student)
        }
    }
    if(arr.length >= k){
        return "NO"
    }
    else{
        return "YES"
    }

}
console.log(angryProfessor(3,[-2,-1,0,1,2]))