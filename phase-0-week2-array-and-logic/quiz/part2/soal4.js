function pasanganTerbesar(num) {
  let str = String(num);
  let arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    let pair = str[i] + str[i + 1];
    arr.push(Number(pair));
  }

  return Math.max(...arr); // ... adalah spread operator //
}

// TEST CASES
console.log(pasanganTerbesar(641573));    // 73
console.log(pasanganTerbesar(12783456));  // 83
console.log(pasanganTerbesar(910233));    // 91
console.log(pasanganTerbesar(71856421));  // 85
console.log(pasanganTerbesar(79918293));  // 99