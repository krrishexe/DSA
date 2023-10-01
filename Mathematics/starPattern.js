

function starPattern(num){
    for(let i=0;i<num;i++){
        for(let j=0;j<i+1;j++){
            console.log("*")
        }
        console.log('\n')
    }
}
starPattern(3)