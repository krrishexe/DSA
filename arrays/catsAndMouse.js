function catAndMouse(x, y, z) {
    if(Math.abs(z-y) == Math.abs(z-x)){
        return "Mouse C"
    }
    else if(Math.abs(z-y) < Math.abs(z-x)){
        return "Cat B"
    }
    else{
        return "Cat A"
    }

}
console.log(catAndMouse(11,4,16))