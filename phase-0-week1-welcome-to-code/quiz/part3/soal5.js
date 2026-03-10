let input = 5;

for(let i=1; i<=input; i++){
    let bintang = '';
    for(let j=0; j<i; j++){
        bintang += "* "
    }
    console.log(bintang);
}
// output
// *
// * *
// * * *
// * * * *
// * * * * *
for(let i=input; i>=1; i--){
    let bintang = '';
    for(let j=0; j<i; j++){
        bintang += "* "
    }
    console.log(bintang);
}
// output
// * * * * *
// * * * *
// * * *
// * *
// *