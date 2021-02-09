let displayMove = (source, destination) => {
  console.log(`Move disc from ${source} to ${destination}`);
};

let moveCalculator = (disc) => {
  if (disc === 3) {
    return 7;
  }
  return moveCalculator(disc - 1) * 2 + 1;
};
console.log(moveCalculator(3));

let hanoi = (disc, source, destination) => {
  if (disc === 1) {
    displayMove(source, destination);
  } else {
    let other = 6 - (source + destination);
    hanoi(disc - 1, source, other);
    displayMove(source, destination);
    hanoi(disc - 1, other, destination);
  }
};

hanoi(3, 1, 3);
