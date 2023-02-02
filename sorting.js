// Sorting an array using recurrsion
// [2,3,1,4] By default input


myArray = [2,3,1,4];
myArrayList = [];
let i=0;
let j=1;
//This fuction is used for checking the given array is sorted or not if the array is sorted
//than return the array otherwise my array is unsorted
function isSorted(array){
    for(let i=0; i<array.lenght; i++){
        if(array[i]>array[i+1]){
            return false;
        }
    }
    return true;
}


function sortCheck(array){
    if(isSorted(array)){  //calling the above funtion
        myArrayList = array;
        return;
    }
    //sorting the array
    else if(array[i] < array[j]){ //if index of array i is lessthan the index of array j than do nothing
        i++;                      // instead increment i and j 
        j++;
        sortCheck(array)  
    }
    else{
        [array[i],array[j]] = [array[j],array[i]];   //if index of array i is morethan the index of array j 
        i=0;                    //than swap it in place of i put j and in place of j put i
        j=1;
        sortCheck(array)
    }

}
 sortCheck(myArray);
 console.log(myArrayList);
//note: refer all ss of this of this problem in pc