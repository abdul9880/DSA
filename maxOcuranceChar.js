// find the maximum ocurring characters in given string?
// 'Hello world' -- input string
//output--'l'

function maxOcurr(string){
  let map={};
  string.split('').forEach(element => {
    map[element]=(map[element] || 0) +1;
  });
  //console.log(map)

  let max=1;
  let char=string[0];
  for(let item in map){
    if(map[item] > max){
        max = map[item];
        char=item;
    }
  }
  return char;

}
const res=maxOcurr('Hello worldddddddddddd');
console.log(res);