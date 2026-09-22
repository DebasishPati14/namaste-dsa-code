const numJewelsInStonesOptimal = function (
  jewels: string,
  stones: string,
): number {
  let totalJewels = 0;
  const jewelSet = new Set<string>();

  for (let j = 0; j < jewels.length; j++) {
    jewelSet.add(jewels[j]);
  }

  console.log({ jewelSet });

  for (let i = 0; i < stones.length; i++) {
    const stoneElement = stones[i];
    if (jewelSet.has(stoneElement)) {
      totalJewels++;
    }
  }

  return totalJewels;
};

const numJewelsInStones = function (jewels: string, stones: string): number {
  let totalJewels = 0;
  for (let i = 0; i < stones.length; i++) {
    const stoneElement = stones[i];
    for (let j = 0; j < jewels.length; j++) {
      const jewelElement = jewels[j];
      if (jewelElement == stoneElement) {
        totalJewels++;
        break;
      }
    }
  }
  return totalJewels;
};
const givenJewels = 'aA',
  givenStones = 'aAAbbbb';
console.log({
  totalJewelsFound: numJewelsInStonesOptimal(givenJewels, givenStones),
});
