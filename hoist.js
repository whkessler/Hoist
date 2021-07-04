//1.
// console.log(hello);                                   
// var hello = 'world';
// var hello;
// console.log(hello); undefined, after running the code it was undefined
// hello = 'world'  

//2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// var needle = 'magnet';  //I predicted that the output would be magnet because it was defined in the function and it was
// console.log(needle);

//3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// The variable brendan was established and defined and then it was console loged so super cool was printed inside, the function
// print was established and brendan was defined but the function was not called

//4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// It reads the variable food as 'chicken' and then console logs it then the function eat is called and 
//food is declared as 'half chicken' and console loged , then food is defined as 'gone' but after the console log
// so nothing is done with that variable

//5.
//mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// this is not written correctly to run without an error , the variable is not defined correctly and the function
//is not set up in the right way it could be done this way

// mean();
// food ="chicken";
// console.log(food);
// function mean(){
//     food ="chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


//6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//nothing is defined in the first console log then the funtion is called and rock and r&b is printed then 
// the console log of the defined variable disco


//7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//the variable dojo is defined and then loged , then the function is called and seattle and burbank are printed,
// lastly dojo is console loge again outside of the funtion so it is san jose