let numa=[15,24,6,4,7,8];
let alfa=["mango","banana","papaya","kiwi","chiku"];
let newarr=[];

//create other array which element have >5 lenght

for(let i=0;i<alfa.length;i++){
if(alfa[i].length>5){
     newarr.push(alfa[i]);
}
}
console.log(newarr)

