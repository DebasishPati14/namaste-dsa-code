const isPalindromeOptimal = function (s: string): {
  str: string;
} {
  let isIt: boolean = true;

  for (
    let i = 0, j = (s.length - 1) / 2;
    i < str.length / 2 && j >= s.length / 2;
  ) {
    const itemI = s[i].toLowerCase();
    const itemJ = s[j].toLowerCase();
    if (!(itemI.charCodeAt(0) >= 97 && itemI.charCodeAt(0) <= 122)) {
      i++;
      continue;
    } else if (!(itemJ.charCodeAt(0) >= 97 && itemJ.charCodeAt(0) <= 122)) {
      j--;
      continue;
    } else {
      if (itemI != itemJ) {
        isIt = false;
        break;
      }
      i++;
      j--;
    }
  }

  return { isIt };
};

const isPalindrome = function (s: string): { str: string; isIt: boolean } {
  let revStr: string = '';
  let filStr: string = '';
  s = s.toLowerCase();
  console.log(filStr);
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele.match(/[a-z]/i)) {
      filStr += ele;
      revStr = ele + revStr;
    }
  }
  return { isIt: revStr === filStr, str: revStr };
};

const reverse = (str: string): string => {
  let revStr = '';
  for (let i = str.length - 1, j = 0; i >= 0 && j < str.length; i--, j++) {
    const item = str[i];
    if (
      (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) ||
      (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)
    ) {
      revStr += str[i].toLowerCase();
    } else {
      continue;
    }
  }
  return revStr;
};

const str = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(str), isPalindromeOptimal(str));
