function isPowerOfTwo(num: number){
  if(num > 2){
  return isPowerOfTwo(num/2);
  }else if(num == 2){
    return true
  }else{
    return false;
  }
}
const n = 32;
console.log(`The number ${n} is power of two: ${ isPowerOfTwo(n) }`);
