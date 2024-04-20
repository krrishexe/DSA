function sortZeroOnetwo(arr){
    let i = 0;
    let j = arr.length -1;
    while(i<j){
        while(arr[i] == 0){
            i++;
        }
        while(arr[j] == 2){
            j--;
        }
        if(arr[i] ==2 && arr[j] == 0 || arr[i]==2 && arr[j] ==1){
            let temp;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }else if(arr[i] == 0 && )
        return arr
    }
}
console.log(sortZeroOnetwo([0,2,1,0,2,1,2]))