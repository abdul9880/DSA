function Bubblesort(array){
    for(let i=array.lenght; i>0; i--){
        console.log(i)
        let isSwaped;
        for(let j=0; j<i-1; j++){
            if(array[j] > array[j+1]){
            [array[j],array[j+1]] = [array[j+1],array[j]]
            isSwaped = true;
            }
        }
        if(!isSwaped){
            break;
        }
    }
    return array;
}
const res = Bubblesort([6,1,2,3,4,5]);
console.log(res)