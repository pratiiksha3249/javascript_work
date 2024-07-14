let a=[11,22,33,44,55];
console.log(a)
console.log(typeof a);

//array methods 
let myaar=new Array(110,220,330,440);
myaar.push(100);
console.log(myaar);
//last element possion push
a.push(100);
console.log(a);
//last element possions pop
myaar.pop();
console.log(myaar);
console.log(myaar+a);

console.log("first element possion add value");
//first element possion add value
myaar.unshift(1222);
console.log(myaar);
console.log("first element possion remove value");
myaar.shift();
console.log(myaar);

//value include or not
console.log(myaar.includes(220));
console.log(myaar.includes(0));

//index return of specific element
console.log(myaar.indexOf(440));
//convert in string 
const b=myaar.join();
console.log(b);
console.log(typeof b);


//slice splice
const arr=[11,22,33,44,55];
const arrb=arr.slice(2,4);
//its modify original arraya 
console.log(arrb);

//its not modify original array
console.log(arr);

//splice
// const k=arr.splice(2,4);
console.log(arr.splice(2,4));
console.log(arr);

const boys=["ram","sagar","abhay","sham"];
const girls=["tiksha","ovi","mrudula","vrunda"];
/*
boys.push(girls);
console.log(boys);
console.log(boys[0]);
console.log(boys[2]);
console.log(boys[4]);
console.log(boys[4][3]);
*/
console.log(typeof boys+girls);

const v= boys.concat(girls);
console.log(v);
//or
console.log(boys.concat(girls))



var v1=["s","k","t"];
var v2=["o","p","q"];
console.log(v1.concat(v2))
//its not modify original array 
console.log(v1);

//spread two or more array elements
const newarr =[...v1,...v2];
console.log(typeof newarr);

let result=( boys+girls);
console.log(result);
console.log(result[2]);

//array into another array

const combined_array=[11,22,33,[144,155,166],44,55,[244,255,[111,222]]];
console.log(combined_array);
console.log(combined_array[6][2][1]);

//all block combine or return only one block of combined all elements
const combine_new=combined_array.flat(Infinity);
console.log(combine_new[3]);

//isarray find element is present or not in array
console.log();

//from convert string to array
console.log(Array.from("pratiksha"));

let a1=100;
let b1=200;
let c1=300;
let d1={name:"tiksha"}

console.log(Array.of(a1,b1,c1,d1));