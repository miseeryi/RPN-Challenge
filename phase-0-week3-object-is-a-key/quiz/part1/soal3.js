function cariMedian(arr) {
    let arrSort = arr.sort((a,b) => a-b)

    // for(let i=0; i<arr)

    // console.log(arrSort)
    let indeks 
    if(arrSort.length % 2 === 1) {
        indeks = Math.floor((arrSort.length/2)) 
        return arrSort[indeks]
    }
    else {
        let sum = ((arrSort[(arrSort.length/2) - 1]) + (arrSort[arrSort.length/2])) / 2
        return sum
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5