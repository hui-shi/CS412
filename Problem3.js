/*
Write a function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result.
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
containing fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
This is actually a little tougher than it sounds…a hint would be to take a look at how bit/
character stuffing is done in networking.
For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
contains the original string, the modified string, the total number of As in the modified string,
and the overall length of the modified string:
{
	 	 originalString: xxx,
	 	 modifiedString: xxx,
	 	 numberReplaced: xxx,
	 	 length:		 	 xxx,
}
Print the data from the returned object on the console (console.table would be good for this).
 */

const wrapper = (string, lambda) => lambda(string);

//function that splits string at character c
const breakc = string =>{
    let cplaces = [];
    let arraycount = 0;
    for(let counter = 0; counter<string.length; counter++){
        if(string.charAt(counter) == "c"){
            cplaces[arraycount] = counter;
            arraycount = arraycount+1;
        }else if(string.charAt(counter) == "C"){
            cplaces[arraycount] = counter;
            arraycount = arraycount+1;
        }
    }
    //console.log(cplaces.toString());
    let answer = [];
    let answercount = 0;
    answer[answercount] = string.substring(0, cplaces[0]);
    answercount = answercount+1;
    for(let i = 0; i<cplaces.length; i++){
            answer[answercount] = string.substring(cplaces[i], cplaces[i+1]);
            answercount = answercount+1;
    }

    return answer.toString();
}

console.log(wrapper("supercalifragilisticexpialidocious",breakc));

//function that replaces all the a's with A's
const replace = string =>{
    const original = string;
    let acount = 0;
    for(let i = 0; i<string.length; i++){
        if(string.charAt(i) === 'a'){
            string = string.substring(0,i) + "A" + string.substring(i+1);
            acount = acount + 1;
        }
    }
    const modlength = string.length;
    let obj =  {
        originalString: original,
        modifiedString: string,
        numberReplacements: acount,
        length: modlength,
    }
    return obj;
}

console.log(wrapper("supercalifragilisticexpialidocious", replace));