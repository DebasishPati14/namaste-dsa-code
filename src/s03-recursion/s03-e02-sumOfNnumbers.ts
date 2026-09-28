let totalSum = 0;
function sumOfFirstNnumbers(num: number){
    if(num < 0){
        return;
    }
    totalSum = totalSum + num;
    num = num - 1;
    sumOfFirstNnumbers(num);
}

const n = 10;
sumOfFirstNnumbers(n);

console.log(`The sum of n numbers: `, { totalSum });
