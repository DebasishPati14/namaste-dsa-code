function findFibonacci(num: number): number{
  if(num <= 0){
    return 0;
  }else if( num == 2 || num == 1){
    return 1;
  }else {
    return findFibonacci(num - 1) + findFibonacci(num - 2);
  }
}

const n = 7;
console.log(`The fibonacci of ${n} is: ${findFibonacci(n)}`)
