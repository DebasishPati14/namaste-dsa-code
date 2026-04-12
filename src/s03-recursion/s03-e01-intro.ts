function printNumsNto1(num: number){
    if(num < 1){
        return;
    }

    console.log({num});
    num =  num - 1;
    printNumsNto1(num);
}

const n = 10;
printNumsNto1(n);

 function printNums1toN(num: number = 1){
     if(num > n) return;
    
     console.log({num});
     num = num + 1;
     printNums1toN(num);
}

console.table({upar: `N to 1`, niche: `1 to N`});
printNums1toN();
