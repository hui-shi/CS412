/*
Write a function that takes as its input the following formatted strings:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
‘2^8’ (where ^ is exponentiation)
This function should
Determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)
You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
always the same length). Write a helper function to parse the expression that uses
destructuring to assign values to left and right.
 */

//function that breaks up expression into bits
const parse = expression => {
    let left = Number(expression.charAt(0));
    let right = Number(expression.charAt(2));
    let operator = expression.charAt(1);
    return [left, operator, right];
}

//code for this function based on code from CS 412 Functions lecture
//function that returns function for operator
const func = operator =>{
    switch(operator) {
        case '+':
            return (left, right) => left + right;
            break;
        case '-':
            return (left, right) => left - right;
            break;
        case '*':
            return (left, right) => left * right;
            break;
        case '/':
            return (left, right) => left / right;
            break;
        case '^':
            return (left, right) => left ** right;
            break;
    }
}
//function that evaluates the operator
const evaluate = string =>{
    let parsed = parse(string);
    //let left = parsed[0];
    //let right = parsed[2];
    //let operator = parsed[1];
    const todo = func(parsed[1]);
    return todo(parsed[0], parsed[2]);

}
/*
‘4+2’
‘5*7’
‘6-1’
‘9/2’
‘2^8’ (where ^ is exponentiation)
 */
const test1 = "4+2";
console.log(evaluate(test1));
const test2 = "5*7";
console.log(evaluate(test2));
const test3 = "6-1";
console.log(evaluate(test3));
const test4 = "9/2";
console.log(evaluate(test4));
const test5 = "2^8";
console.log(evaluate(test5));

//ask Donham if need to be able to work when tested with his example test on the doc


