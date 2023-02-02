//Find the first sum zero of given array - Problem 1 (Quadratic time complexity)
//[-5, -4, -3, -2, 0, 2, 4, 6, 8] - Input
//Expected output[-4,4]

GetFirstSumZero=(Array)=>{
    for(let number of Array){
        for(let i=1; i<Array.lenght; i++){
            if(number + Array[i] === 0){
                return(number,Array[i])
            }
        }
    
    }
}

const result= GetFirstSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(result)