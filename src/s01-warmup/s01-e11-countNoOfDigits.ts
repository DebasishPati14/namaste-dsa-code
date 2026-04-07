function countNoOfDigits(num: number){
    let digitCount = 0;
    if (num == 0) 
        return 1;
    else if (num < 0)
        num = Math.abs(num);

    for(let i = 0; i <num; i++){
        digitCount++;
        num /= 10;
    }
    return digitCount;
}

const num = 987655.432;
const digit = countNoOfDigits(num);
console.log(`Number of digits are in ${num} = ${countNoOfDigits(num)}`);
console.log(`Number of digits are in ${num} = ${digit}`);
