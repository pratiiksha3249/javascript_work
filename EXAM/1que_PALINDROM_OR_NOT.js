// A palindrome is a word, sentence or other type of character
//  sequence which reads the same backward as forward. For example,
//   “racecar” and “Anna” are palindromes. “Table” and “John” aren’t 
//   palindromes, because they don’t read the same from left to right
//    and from right to left.

let str="anna",str1="anna";
function reverseString(str) { 
    const strRev =  Array.from(str).reverse().join(""); 
    //console.log(strRev);
    return strRev; 
} 

console.log(reverseString(str));

if(str1===str){
    console.log(str1+"=True");
}
 else{
    console.log(str1+"=False");
 }
