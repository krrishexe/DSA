function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0;
    if (d1 <= d2 && m1 === m2 && y1 === y2) {
        return fine
    }
    else if (d1 > d2 && m1 === m2 && y1 === y2) {
        return fine = (d1 - d2) * 15;
    }
    else if (m1 > m2 && y1 === y2) {
        return fine = (m1 - m2) * 500;
    }
    else if (y1 > y2) {
        return fine = 10000
    } else {
        return fine
    }
}
console.log(libraryFine(29, 6, 2015, 6, 7, 2015))