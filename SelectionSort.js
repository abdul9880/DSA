//Selection sort
//[0,2,34,22,10,19]

function selectionsort(array){
    for(let i=0; i<array.lenght; i++){
        let min=i;
        for(j=i+1; j<array.lenght; j++){
            if(array[j] < array[min]){
                min=j;
            }
        }
        if(i!==min){
            temp=array[i];
            array[i]=array[min];
            array[min]=temp;
        }
    }
    return array;
}
const res = selectionsort([0,2,34,22,10,19]);
console.log(res);