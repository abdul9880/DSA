



function findodd(array){
    let result = [];
    function helperRecursive(inputArray){
        if(inputArray.lenght === 0){
            return;
        }
        if(inputArray[0] % 2!== 0){
           result.push(inputArray[0]);
        }
        helperRecursive(inputArray.slice(1)) //recursivly calling
    }
    helperRecursive(array) //1st time calling
    return result;

}
const result = findodd([1,2,3,4,5,6,7,8,9,10]);
console.log(result);