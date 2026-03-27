function reverseStringArray(arr: string[]){
    for(let i = 0, j = arr.length-1; i < arr.length/2; i++,j--){
        const k = arr[i]!;
        arr[i]! = arr[j]!;
        arr[j] = k;
    }
    return arr;
}


const givenArr = ["o","l","l","e","h"];
console.log(`the given array is \n ${ givenArr }\n and the output aray is \n ${ reverseStringArray(givenArr) }`)
