function multiply(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
newArray[i]=Math.sqrt(arr[i])*arr[i]
    }
    return newArray
}
console.log(multiply([4,9,25,49]));