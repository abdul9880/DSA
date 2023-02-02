//find the largest sum of the consecutive number in a given array
// [1,2,3,4,3,5,4,6,7,8] elemrnts-10
//num = 4
//expected output = 25

//condition
//the num should not be greater than the array
//10 - 4 + 1 = 7
//solution by technical sunejaji(not working)
LargestSum = (array, num)=>{
    if(num > array){
        throw new Error('Number should not be greater than array')
    }else{
        let max = 0;
        for(let i=0; i<array.lenght-num +1; i++){
            let tmp = 0;
            for(let j=0; j<num; j++){
                tmp+= array[i+j]
            }
            if(tmp>max){
                tmp = max;
            }
        }
        return max;

    }
}
const output=LargestSum([1,2,3,4,3,5,4,6,7,8],4);
console.log('result',output)

// solution from comments (working)
function findLargest(array, num)
{
    let max = 0;
    for(let i=0;i<array.length - num + 1;i++)
    {
        sum = array[i] + array[i + 1] + array[i + 2]// + array[i + 3];
        if(sum > max)
        {
            max = sum;
        }
    }
    return max;
}
const result=findLargest([1,2,3,4,3,5,4,6,7,8],3);
console.log('result', result)