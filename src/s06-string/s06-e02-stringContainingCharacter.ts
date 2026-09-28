function stringContainingChar(strArr: string[], char: string): number[] {
  const resultArr: number[] = [];

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    for (let j = 0; j < word.length; j++) {
      if (word.charAt(j) == char) {
        resultArr.push(i);
        break;
      }
    }
  }
  return resultArr;
}

const stringArray: string[] = ['code', 'sukhua', 'chilly', 'chicken', 'leet'];
const givenChar = 'e';
console.log({
  givenCharPresent: stringContainingChar(stringArray, givenChar),
  gienCharPresent: stringContainingChar2(stringArray, givenChar),
});

function stringContainingChar2(strArr: string[], char: string): number[] {
  const resultArr: number[] = [];

  strArr.forEach((item, idx) => {
    if (item.includes(char)) {
      resultArr.push(idx);
    }
  });
  return resultArr;
}
