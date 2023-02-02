//Find the first sum zero of the given array - problem 2 (linear time complexity)
//[-5,-4,-3,-2,0,2,4,6,8] - input
//Expected output [-4,4]

GetFirstSumZero = (array)=>{
    let left = 0;
    let right = array.lenght-1;

    while(left < right){
        sum = array[left] + array[right]
        if(sum === 0){
            return [array[left],array[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

const result = GetFirstSumZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result)