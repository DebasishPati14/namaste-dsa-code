// ===========================
// QUESTION: 1 Reverse String
// ===========================
function printReverseString(orgStr: string, curIdx: number = -1): string{
    console.log({ curIdx })
    if(curIdx == orgStr.length){
        return '';
    }

   curIdx++;
   let resStr:string = printReverseString(orgStr, curIdx);
   resStr += orgStr.charAt(curIdx); 
   return resStr;
}

const str1 = 'abcdefgh'
console.log(`the reverse of string ${str1} is: ${printReverseString(str1)}`);

