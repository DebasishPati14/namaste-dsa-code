let factorial = 1;

function findFactorialOfNum(num: number){
    if(num < 1){
        return;
    }
    factorial *= num;
    num -= 1;
    findFactorialOfNum(num);
}

const n = 10;
findFactorialOfNum(n);
console.log(`factorial of the num ${n} is: ${factorial}`);
