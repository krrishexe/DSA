function pageCount(n, p) {
    // Write your code here
    let start = 0;
    let end = 0;

    for(let i = 0; i <n; i++) {
        if(n % 2 == 0){
            if(p <= Math.floor(n/2)){
                while(i<p){
                    start++
                    console.log(start)
                }
            }
            else{
                for(let j = n ; j<p ; j--){
                    end++
                }
            }
        }
        else{
            if(p <= Math.floor(n/2)){
                while(i<p){
                    start++
                    console.log(start)
                }
            }
            else{
                for(let j = n ; j>p ; j--){
                    console.log("j" , j)
                    end++
                    console.log(end)
                }
            }
        }
    }
    return (end)

}

console.log(pageCount(5,3))