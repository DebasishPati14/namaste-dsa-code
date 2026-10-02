const isAnagram = function (s: string, t: string): boolean {
  let isIt = true;
  const strSet = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const item = s[i].toLowerCase();
    strSet.add(item);
  }
  console.log({ strSet });
  for (let i = 0; i < t.length; i++) {
    const item = t[i].toLowerCase();
    if (!strSet.has(item)) {
      console.log(item);
      isIt = false;
      break;
    }
  }
  return isIt;
};

console.log(isAnagram('malay', 'lam'));
