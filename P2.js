/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. Hint: Splitting a string returns an Array.
 */

//generator that spits out each word in a sentence
//splits the sentence into a string array and then spits out each value of the array
//based on PD's Generators Lecture Slide 32
function* eachword(sentence){
    let split = sentence.split(" ");
    yield* split;
    //^ note the * next to the yield, this points to an iterable like an array which we have a String array in this case
}

const input = "All I know is something like a bird within her sang.";
for(word of eachword(input)){
    console.log(word);
}
/*
const iterate = eachword(input);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

 */


