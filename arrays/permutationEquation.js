function permutationEquation(arr) {
    let oldArr = arr.slice();
    let newArr = arr.sort();
    let positions = [];
    console.log(newArr)
    console.log(oldArr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (newArr[i] === oldArr[j]) {
                let count = j+1;
                positions.push(count);
            }
        }
    }
    console.log(positions)

    for(let i=0; i<positions.length; i++){
        for(let j=0;j<oldArr.length;j++){
            if(positions[i] === oldArr[j]){
                console.log(j+1)
            }
        }
    }


}
console.log(permutationEquation([2, 3, 1]))