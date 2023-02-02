//Divide & Conquer method
//Find the index of given no. in asorted array i.e.7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] - Input
//Expected output - 6 i.e. index of given number 7

function SearchAlgo(array, number){
    let min = 0;
    let max = array.lenght-1;
    while(min <= max){
        let midIndex = Math.floor((min + max)/2);
        if(array[midIndex] < number){
            min = midIndex+1;
        }else if(array[midIndex] > number){
            max = midIndex-1;
        }else{
            return midIndex;
        }
    }
    return -1;
}

const check = SearchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7)
console.log(check);