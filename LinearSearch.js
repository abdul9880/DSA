const users = [{username:'Abdul',email:'Abdul123@gmail.com'},
{username:'Aman', email:'aman@gmail.com'},{username:'xyz',email:'xyz@gamil.com'},
{username:'abc',email:'abc@gmail.com'}]

function isUser(array, val){
    for(let item of array){
        if(item['username'] === val){
            return true;
        }
        
    }
    return false;
}
const res=isUser(users,'Aman');
console.log(res)
