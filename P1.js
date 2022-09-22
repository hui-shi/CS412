/*Write a function that takes a string as its input and returns a new string that contains all of the
 letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
 Duplicates are fine, so 'exioi' -> 'xoiie'. Test your function using the string
 ‘supercalifragilisticexpialidocious’ */

const reversealpha = string =>{
    //const puncts = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"
    //const nopuncts = string.replace(string, @"[^\w\s]", "");
    //Regex.Replace(string,@"[^\w\s]", "");
    //^tried using regex but it really didn't like the @ character
    const nums = 0123456789;
    const nopunctnum = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(nums,"");
    //const nonums = string.replace(nums, "");
    const modified = nopunctnum.split("").sort().reverse().join("");
    //^split string into char array and then sort in alphabetical order then reverse and join back into a string
    return modified;
}

const test1 = reversealpha("exioi");
const test2 = reversealpha("supercalifragilisticexpialidocious");
console.log(test1);
console.log(test2);

//const string = "exioi";
//console.log(string.split("").sort().reverse().join(""));