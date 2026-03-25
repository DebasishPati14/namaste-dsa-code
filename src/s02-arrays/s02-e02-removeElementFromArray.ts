const findNum = 15;
const numArr = [18,17,11,15,15,18,13,15,16,15,17];

function removeElement(givenArr: number[], ele: number){
    let x = 0;
    for(let i = 0; i < givenArr.length; i++){
        if(givenArr[i] != ele){
           givenArr[x]! = givenArr[i]!;
           x++;
        }
    }
    return x;
}

console.log(`here the value of K = ${removeElement(numArr, findNum)}, and array looks like: [ ${ numArr } ]`);

