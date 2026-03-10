
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let mnt = 0;
    let dtk = 0;

    mnt = Math.floor(menit/60);
    dtk = menit%60;

    //logic
    // if(dtk < 10) return `${mnt}:0${dtk}`;
    // else return `${mnt}:${dtk}`;

    //built in function
    let padded = String(dtk).padStart(2,'0');
    return `${mnt}:${padded}`
    
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


