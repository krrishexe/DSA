function sortZeroOne(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        while (arr[i] == 0) {
            i++;
        }
        while (arr[j] == 1) {
            j--;
        }
        if(arr[i] == 1 && arr[j] == 0){
            // swap(arr[i], arr[j]);
            let temp;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        return arr
    }
}
console.log(sortZeroOne([0, 0,1,0, 1, 1, 0, 1]))