let a=[10,20,30,40];


for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

//foreach
a.forEach((element)=>{
    console.log(element*element);
})

//array.from

let name="Tiksha";
let b= Array.from(name);
console.log(b);

//for of
for(let i of a){
console.log(i);
}
//for in
for(let i in a){
console.log(i);
}





