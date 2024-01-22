// function markRow(i,arr){
//     for(let j=0;j<arr[i].length;j++){
//         if(arr[i][j] != 0){
//             arr[i][j] = -1
//         }
//     }
// }

// function markColumn(j,arr){
//     for(let k=0;k<arr.length;k++){
//         if(arr[k][j] != 0){
//             arr[k][j] = -1
//         }
//     }
// }

// function setMatrixToZero(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j] == 0){
//                 markRow(i,arr)
//                 markColumn(j,arr)
//             }
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j] == -1){
//                 arr[i][j] = 0
//             }
//         }
//     }
//     return arr
// }
// console.log(setMatrixToZero([[1,1,1],[1,0,1],[1,1,1]]))


// 2nd method 

function setMatrixToZero(arr, n, m) {
    let row = []
    row.length = n
    let column = []
    column.length = m
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] == 0) {
                row[i] = 1
                column[j] = 1
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || column[j]) {
                arr[i][j] = 0
            }
        }
    }
    return arr
}

console.log(setMatrixToZero([[1, 0, 1], [1, 0, 1], [1, 1, 1]], 3, 3))