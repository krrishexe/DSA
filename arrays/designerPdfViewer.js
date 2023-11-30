function designerPdfViewer(h, word) {
    // Write your code here
    let arr = []
    let hel 
    for(let char of word){
        arr.push(h[char.charCodeAt(char) - 97])
        hel = Math.max(...arr)
    }
    return hel*word.length

}

console.log(designerPdfViewer([1 ,3, 1, 3 ,1, 4, 1, 3 ,2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],"abc"))