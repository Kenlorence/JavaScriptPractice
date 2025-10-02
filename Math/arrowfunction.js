const num = [1,2,3,4,5,6,8,9,10,11,12,24,44,67,56,43,56,90,23,45,78,89,99];

squared = num.map((elements => Math.pow(elements,2)));

cube = num.map((elements => Math.pow(elements,3)));
console.log(cube);

evennum = num.filter(num => num% 2 === 0);
console.log(evennum);

oddnum = num.filter(num => num% 2 !== 0);
console.log(oddnum);

total = num.reduce((acc, curr) => acc + curr, 0)
console.log(total);

spot = num.filter(num => num == 56);
console.log(spot);

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "sarah"];

function findName(query) {
return names.filter( name=>
    name.toLowerCase().includes(query.toLowerCase())   
);

}
console.log(findName("sa"));