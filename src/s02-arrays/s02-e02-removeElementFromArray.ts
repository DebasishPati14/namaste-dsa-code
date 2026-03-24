const findNum = 15;
const numArr = [18,17,11,15,15,18,13,15,16,15,17];

function removeElement(givenArr: number[], ele: number){
     let repeatedCount = 0;
    for(let i = 0, j = 0; i < givenArr.length; i++){
        if(givenArr[i] != ele){
            j = i;
            continue;
        }
        else if(givenArr[i] == ele) {
            repeatedCount++;
                        console.log('2........here i and j', i, j, "and array of i and j", givenArr[i], givenArr[j])
        //   givenArr[i] = NaN;
        }
        
        if(i != j && givenArr[i] != ele){
            console.log('here i and j', i, j, "and array of i and j", givenArr[i], givenArr[j])
            givenArr[j]! = givenArr[i]!;
            j = i;
        }
    }
    return repeatedCount;
}

console.log(`here the value of K = ${removeElement(numArr, findNum)}, and array looks like: [ ${ numArr } ]`);

