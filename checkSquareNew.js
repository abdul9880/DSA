//checking square in another array [linear complexity]
//array1 = [1,2,3,4] array2 = [1,9,4,16] -- case1
//array1 = [1,2,4,2]  array2 = [1,4,4,16] -- case2
// lets consider case 2
// map1={1:1,2:2,4:1}  map2={1:1,4:2,16:1}

function checkSquare(array1, array2) {
    map1={};
    map2={};
    for(let item of array1){       //n times
        map1[item] = (map1[item] || 0) +1;
        //console.log(map1)
    }
    
    for(let item1 of array2){   //n times 
        map2[item1] = (map2[item1] || 0) +1;
       // console.log(map2)
    }
    
    for(let key in map1){  //n times                     //obj key compare in terms of square 
        if(!map2[key*key]){
            return false;
        }
        if(map1[key] !== map2[key*key]){                 //value compare
            return false
        }
    }
    return true;   
}
const result = checkSquare([1,2,4,2],[1,4,4,16]);
console.log(result);
