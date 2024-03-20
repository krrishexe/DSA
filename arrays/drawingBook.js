function drawingBook(n, p) {
    let startPage = 1;
    let startCount = 0;
    let endPage = n;
    let endCount = 0;

    if (p <= (n / 2)) {
        while (startPage < p) {
            startPage += 2;
            ++startCount;
        }
        return startCount
    } else {
        if (n - 1 === p) {

            return endCount;
        }
        while (endPage > p) {
            endPage -= 2;
            ++endCount
        }
        return endCount
    }

}

console.log(drawingBook(9, 5))