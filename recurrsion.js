// Recursion: when a function call itself
// if a funtion call itself than there should be an endpoint
// otherwise it will get called for infinite time
let counter=1;
function demo(number){
    if(counter > number){
        return;
    }

    console.log('Abdul'+counter)
    counter++
    demo(number)   //Recursion function
}
demo(10);
