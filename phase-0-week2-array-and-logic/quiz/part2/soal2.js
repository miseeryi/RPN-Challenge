function angkaPalindrome(num) {
    function isPalindrome(n) {
        let str = String(n);
        let reversed = str.split('').reverse().join('');
        return str === reversed;
    }

    let next = num + 1;
    while (!isPalindrome(next)) {
        next++;
    }
    return next;
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000));












