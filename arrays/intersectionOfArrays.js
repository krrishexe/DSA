let nums1 = [1,2,2,1,2]
let nums2 = [2,2,2]

function intersectionOfArrays(nums1, nums2) {
    let newArr = []
    for(let i = 0 ; i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i] == nums2[j]){
                newArr.push(nums1[i])
                //delete the nums2[j] element
                nums2=nums2.filter((el)=> el!=nums2[j])
            }
        }
    }
    return newArr

}
console.log(intersectionOfArrays(nums1, nums2))