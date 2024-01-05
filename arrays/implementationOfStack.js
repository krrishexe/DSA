function minStack(){
    var arr;

    function push(num){
        return arr.length ? arr.pop(arr.length) :arr.pop(arr.length - 1);
    }
    function pop(num){
        return arr.pop(arr.length - 1)
    }
    function top(num){
        return arr.pop(arr.length - 1)
    }
    function getMin(num){
        return Math.min(arr)
    }

}
// minStack()