var sortColors = function(nums){
    let a;
    let b;
    let c;
    let obj = {
        a :0,
        b:0,
        c:0
    }
    for(let i=0; i<nums.length;i){
        if(nums[i]==2){
            obj.c += 1
            c = nums[i]
            let index = nums.indexOf(c)
            nums.splice(index,1)
        }
        else if(nums[i]==1){
            obj.b += 1
            b=nums[i]
            let index = nums.indexOf(b)
            nums.splice(index,1)
            
        }
        else if(nums[i]==0){
            obj.a +=1
            a = nums[i]
            let index = nums.indexOf(a)
            nums.splice(index,1)
        }
    }
    console.log(obj.a)
    for(let i= 0 ;i <obj.c;i++){
        nums.unshift(c)
    }
    for(let i= 0 ;i <obj.b;i++){
        console.log(b)
        nums.unshift(b)
    }
    for(let i= 0 ;i <obj.a;i++){
        console.log(a)
        nums.unshift(a)
    }
    return nums
    
}
console.log(sortColors([0]))