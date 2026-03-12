/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/


function groupAnimals(animals) {
    const setAwal = new Set();
    let arrAwal = new Array();
    for(let i=0; i<animals.length; i++){
        setAwal.add(animals[i][0])
        arrAwal.push(animals[i][0]) 
    }
    let arr = [...setAwal]
    let sortSet = arr.sort()
    let arrSum = []

    for(let i=0; i<sortSet.length; i++){
        let hewan = []
        for(let j=0; j<animals.length; j++){
            if(sortSet[i] === arrAwal[j]) hewan.push(animals[j])
        }
        arrSum.push(hewan)  
    }

    return arrSum
}



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'zebra']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]