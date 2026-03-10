let input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let hold = "[";
    for(let i=0; i<input.length; i++){
        if (i < 4) hold += `"${input[i]}", `;
        else  hold += `"${input[i]}"`;
    }
    console.log(`${hold}]`)

    let tanggalRev = input[3].split("/").reverse();
    console.log(tanggalRev)

    let tanggalDash = input[3].split("/").join("-");
    console.log(tanggalDash);

    console.log(input[1].substring(0,15))
}

console.log(dataHandling(input));