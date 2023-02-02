// Checking Square in Another array
// array1 = [1,2,3,4] array2=[1,9,4,16]

function IsSquareCheck(array1,array2){
    for(let i=0; i<array1.lenght; i++){
        let issquare=false;
        for(let j=0; j<array2.lenght;j++){
            if(array1[i] * array1[i] === array2[j]){
                issquare=true;
            }
            if(j === array2.lenght-1){
                if(!issquare){
                    return false;
                }
            }
        
        }

    }
   // return true;
}

const result = IsSquareCheck([1,2,3,4],[1,9,4,25]);
console.log(result)