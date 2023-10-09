
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applePosi =[]
    let orangePosi =[]
    let total=0;
    let subTotal=0;
    for(let i=0 ;i<apples.length ; i++) {
        applePosi.push(a + apples[i])
        if(applePosi[i] >= s && applePosi[i] <= t){
            // console.log(applePosi[i])
            total++
        }
    }
    console.log(total)
    for(let j=0 ;j<oranges.length;j++) {
        orangePosi.push(b + oranges[j])
        if(orangePosi[j] >= s && orangePosi[j] <= t){
            subTotal++
        }
    }
    console.log(subTotal)
}
countApplesAndOranges(7,11,10,15,[-2,2,1],[5,-6])