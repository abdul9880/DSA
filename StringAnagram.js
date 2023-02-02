//String Anagram - problem 3
// string1 -'hello' string2 - 'llheo'

//conditions
//lenght of string1 should be equal to string 2
//letters of string1 should be same as string2 but the arrange could be diffrent

isAnagram = (string1,string2)=>{
    if(string1.lenght !==string2.lenght){
        return false;
    }
    let counter = {}
    for(let letters of string1){
        counter[letters]=(counter[letters] || 0) +1;   
        console.log(counter[letters])
    }
    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1;
    }
    return true;

}
const check = isAnagram('hello', 'llheo');
console.log(check)