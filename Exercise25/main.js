let numbers = [1, 2, 3];

let allnumbers = [...numbers, 4, 5, 6];

console.log(allnumbers);

function kudhufo(...numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

console.log(kudhufo(13, 34));
