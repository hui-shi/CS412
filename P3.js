/*
Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
code to call the function on each value of the array [1,2,3,4,5,6,7]. Note: This is NOT a
generator problem. The .map( ) method on Array is what I'm looking for here.
 */
//function that takes in a value and prints out the cube of that value
let cube = number => {
    console.log(number**3);
}

//map applies the function to each value of the array and returns a new array but this new array is
//probably lost afterwards here
[1,2,3,4,5,6,7].map(cube);
//const arr = [1,2,3,4,5,6,7];
//const cubed = arr.map(arr[x] => cube());
//arr.map(cube);
//when I took out the () it worked but why does it work when it's cube but not when it's cube()? I thought
//having the () executes the function... weird