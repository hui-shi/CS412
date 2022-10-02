/*
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
 */
//generator for fibonacci sequence- starts with 0 and then goes one with the rest of the sequence
//all of the code for this generator except the first line is from PD's Generators Lecture, slide 24
function* fibs(){
    yield 0; //to account for the first value in fib seq
    let [val1 ,val2, result] = [0,1,0];
    while(true){
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

//generator that gets the next value in the fibonacci sequence, determines if it's even or odd and if it's
//even it spits it ou
function* onlyevenfibs(){
    let iterate = fibs();
    let output = iterate.next().value;
    for(fib of fibs()){
        if(fib%2 === 0){
            yield fib;
            //yield is very important or else when you try to iterate through this generator it will
            //just return undefined
        }
    }
    /*let iterate = fibs();
    let output = iterate.next().value;
    while(output % 2 === 1){
        output = iterate.next().value;
    }
    return output;

     */
    /*
    let output = fibs().value;
    while(output%2 === 1){
        output = fibs().value;
    }
    return output;

     */
    /*
    for(fib of fibs()){
        if(fib % 2 === 0){
            return fib;
        }
    }
     */
}


let test = onlyevenfibs();
let count = 6;
while(count-- > 0){
    console.log(test.next().value);
}

/*
let test = onlyevenfibs();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
*/
