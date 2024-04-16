let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

function intersectionOfArrays(nums1, nums2) {
    let newArr = []
    for(let i = 0 ; i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i] == nums2[j]){
                console.log("vaues of i :"+ i + " values of j :" + j)
                newArr.push(nums1[i])
                nums2[j] = -12345;
                break;
                // nums2=nums2.filter((el)=> el!=nums2[j])
            }
        }
    }
    return newArr

}
console.log(intersectionOfArrays(nums1, nums2))