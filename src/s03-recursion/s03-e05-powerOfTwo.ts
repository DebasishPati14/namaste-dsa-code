const n = 252;

function checkPowerOfTwo(num: number) {
  if (num > 2) {
    num = num / 2;
    console.log({ num });
    return checkPowerOfTwo(num);
  } else {
    console.log({ num, res: num == 2 });

    return num == 2 || num == 1;
  }
}

console.log(`The number ${n}, is a power of two: ${checkPowerOfTwo(n)} `);
function isPowerOfTwo(num: number) {
  if (num > 2) {
    return isPowerOfTwo(num / 2);
  } else if (num == 2) {
    return true;
  } else {
    return false;
  }
}
const target = 32;
console.log(`The number ${n} is power of two: ${isPowerOfTwo(target)}`);
