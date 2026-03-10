let nama = "aby", peran = "Ksatria";

if(nama === ""){
    console.log("Nama wajib diisi");
}else if(peran === ""){
    console.log("Peran wajib Diisi");
}else {
    if(peran === "Ksatria"){
        console.log(`Hallo ${peran} ${nama}`);
    }else if(peran === "Tabib"){
        console.log(`Hallo ${peran} ${nama}`);
    }else if(peran === "Penyihir"){
        console.log(`Hallo ${peran} ${nama}`);
    }
}

