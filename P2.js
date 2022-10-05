/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. Hint: Splitting a string returns an Array.
 */

//generator that spits out each word in a sentence
//splits the sentence into a string array and then spits out each value of the Array
//based on PD's Generators Lecture Slide 32
function* eachword(sentence){
    let split = sentence.split(" ");
    yield* split;
    //^ note the * next to the yield, this points to an iterable like an Array and allows each value
    //to be sent out (we have a string Array here)
}

//should print out each of the words in the input on a separate line
const input = "All I know is something like a bird within her sang.";
for(word of eachword(input)){
    console.log(word);
}


