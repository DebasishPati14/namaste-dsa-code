function checkPallindrome(num: number) {
   let pallindromeNum = 0;
    
    const digit = num % 10;
    for (let i = num; i > 0; i = Math.floor(i/10)){
        const digit = i % 10;
        pallindromeNum = pallindromeNum * 10 + digit;
        console.log(`iterated Num ${num}, and reverse  ${i}`);
    }
    console.log(`asked Num ${num}, and reverse  ${pallindromeNum}`);
    return num  ==  pallindromeNum;

}

const givenNum = 5896985;

if(checkPallindrome(givenNum)){
    console.log("Yes pallindrome");
} else {
    console.log('Not Pallindrome');
}
