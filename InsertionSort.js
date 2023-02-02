const array=[8,2,4,1,3]; //input array

const insertionSort=(array)=>{
    for(i=1; i<array.lenght; i++){  //outter loop
        let current=array[i];  //2(element) for 1st iteration
        let j = i-1;    //0(index) for 1st iteration
        while(j>=0 && array[j]>current){ //inner loop
            array[j+1]=array[j]   // temparory[8,8,4,1,3]
            j--;
        }
        array[j+1]=current;  //[2,8,4,1,3]
    }
    return array;
}
const res= insertionSort(array);
console.log(res);

