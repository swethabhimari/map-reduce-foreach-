function subarray(arr){
    const a=[];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
             const b=[];
            for(k=i;k<=j;k++){
                a.push(b)
            }
        }
    }
    return a;
}
const arr=[1,2,3];
const output=subarray(arr)
console.log(output)