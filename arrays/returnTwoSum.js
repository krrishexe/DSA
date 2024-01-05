var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {

        for(let j=0; j < nums.length; j++){
            
            if (nums[i] + nums[i+j+1] == target) {
                arr.push(i)
                arr.push(i+j+1)
                return arr
            }
        }
        
    }
};

console.log(twoSum([3,2,3], 6))