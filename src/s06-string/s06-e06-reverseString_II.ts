const reverseStr = function (str: string, k: number): string {
  let resStr = '';

  for (let i = 0; i < str.length; i += k * 2) {
    const subStr = str.substring(i, 2 * k + i);
    resStr += subStr.length >= 2 * k ? reverse(subStr, k) : subStr;
  }

  return resStr;
};

const reverse = (str: string, k: number): string => {
  let revStr = '';
  for (let i = k - 1, j = 0; i >= 0 && j < k; i--, j++) {
    revStr += str[i];
  }
  for (let i = k; i < str.length; i++) {
    revStr += str[i];
  }
  return revStr;
};

const s = 'abcdefghijkl';
const kTh = 2;

console.log({ reverseStr: reverseStr(s, kTh) });
