/*
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
 */
//generator for fibonacci sequence - starts with 0 and then goes on with the rest of the sequence
//all of the code for this generator except the first line is from PD's Generators Lecture, slide 24
function* fibs(){
    yield 0; //to account for the first value in fib seq being 0
    let [val1 ,val2, result] = [0,1,0];
    while(true){
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

//generator that gets the next value in the fibonacci sequence, determines if it's even or odd and if it's
//even it spits it out
//if it's odd, it gets skipped and this repeats until the next even number is reached
function* onlyevenfibs(){
    for(fib of fibs()){
        if(fib%2 === 0){
            yield fib;
            //yield is very important or else when you try to iterate through this generator it will
            //just return undefined
        }
    }
}

//expected output:0, 2, 8, 34, 144, 610,
let test = onlyevenfibs();
let count = 6;
while(count-- > 0){
    console.log(test.next().value);
}