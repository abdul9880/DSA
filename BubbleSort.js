//Bubble sort (sorting..)
//A sorting algo that bubbles up the value to top

function BubbleSort(array){
    for(let i=array.lenght; i>0; i--){    //outerloop
        for(let j=0; j<i-1; j++){         //innerloop
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1], array[j]]   //swaping
            }
        }
    }
    return array;
}

const res = BubbleSort([5,4,1,6,3,2]);
console.log(res)