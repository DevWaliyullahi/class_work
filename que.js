function multiplyBy (arr){
    let result = [arr[0]*2];    
    for (let i=0; i<arr.length; i++){
    result.push(arr[i]*2);
    }
    return result;
    }
    
    console.log(multiplyBy([1,2,3,4]));