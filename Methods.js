function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 
// Output: 10 (lahat ng numbers tinipon sa isang array)
