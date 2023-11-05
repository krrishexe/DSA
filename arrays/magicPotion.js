function hurdleRace(k, height) {
    // Write your code here
    height.sort((a, b) =>b-a)
    console.log(height)
    if(k < height[0]){
        return height[0] - k
    }
    else{
        return 0
    }

}
console.log(hurdleRace(4,[1,6,3,5,2]))