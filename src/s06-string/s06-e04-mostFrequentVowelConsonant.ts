const mostFrequentVowelConsonant = function (str: string): {
  maxCnsntCount: number;
  maxVowelCount: number;
} {
  const strMap = new Map<string, number>();
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    strMap.set(s, strMap.get(s) ? strMap.get(s)! + 1 : 1);
  }

  let maxVowelCount = 0;
  let maxCnsntCount = 0;

  console.log({ vowelSet, strMap });
  strMap.forEach((val, key) => {
    if (vowelSet.has(key) && val > maxVowelCount) {
      maxVowelCount = val;
    } else if (val > maxCnsntCount) {
      maxCnsntCount = val;
    }
  });

  return { maxCnsntCount, maxVowelCount };
};

const givenString = 'successes';
console.log(mostFrequentVowelConsonant(givenString));
