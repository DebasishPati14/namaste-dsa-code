function getLengthOfLastWord(givenString: string): {
  word: string;
  length: number;
} {
  let length = 0;
  let lastWord = '';
  for (let i = myString.length - 1; i >= 0; i--) {
    if (lastWord == '' && givenString.charAt(i) == ' ') {
      continue;
    } else if (lastWord != '' && givenString.charAt(i) == ' ') {
      break;
    }
    lastWord += givenString.charAt(i);
    length++;
  }

  let word = '';
  for (let i = lastWord.length - 1; i >= 0; i--) {
    word += lastWord.charAt(i);
  }
  return { word, length };
}

const myString = ' Luffy is still a joyboy   ';
const myString2 = 'I am Mr. Debasish ';
console.log({
  lengthOfLastWord: getLengthOfLastWord(myString),
  lengthOfLastWord2: getLengthOfLastWord2(myString2),
});

function getLengthOfLastWord2(givenString: string): {
  word: string;
  length: number;
} {
  const strArr = givenString.split(' ');
  let length = 0;
  let word = '';

  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] == '') {
      continue;
    } else {
      word = strArr[i];
      length = word.length;
      break;
    }
  }
  return { word, length };
}
