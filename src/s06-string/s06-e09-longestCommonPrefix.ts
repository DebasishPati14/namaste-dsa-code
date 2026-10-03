function longestCommonPrefixOptimal(strs: string[]) {
  let matchStrIdx = 0;
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      const itemJ = strs[j];
      if (firstStr[matchStrIdx] != itemJ[matchStrIdx]) {
        return firstStr.substring(0, matchStrIdx);
      }
    }
    matchStrIdx++;
  }

  return strs[0];
}

const longestCommonPrefix = function (strs: string[]) {
  let commonPrefix = '';
  let smallestStrLen = strs[0].length;

  for (let i = 0; i < strs.length - 1; i++) {
    const item1 = strs[i];
    const item2 = strs[i + 1];
    const minLength = item1.length > item2.length ? item2.length : item1.length;
    smallestStrLen = Math.min(smallestStrLen, minLength);

    for (let j = 0; j < minLength; j++) {
      if (item1[j] != item2[j]) {
        if (commonPrefix && commonPrefix[j] != item2[j]) {
          commonPrefix = commonPrefix.substring(0, j);
        }
        break;
      } else if (
        commonPrefix.length <= j &&
        item1[j] == item2[j] &&
        smallestStrLen > j
      ) {
        commonPrefix += item1[j];
      }
    }
  }

  return commonPrefix;
};

const stringsArr = ['covid199', 'covi', 'covid459'];
console.log({ commonPrefix: longestCommonPrefixOptimal(stringsArr) });
