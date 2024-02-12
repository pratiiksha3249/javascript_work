const myNums=[11,22,33,44,55,66,77];
const newNums=myNums
       .map((num)=>(num-1))
       .map((num)=>(num*2))
       .filter((num)=>num>60)                   


//console.log(newNums);

const newnum1=myNums
     .filter((num1)=>num1%2==0)
     .filter((num1)=>num1>60)

     console.log(newnum1);
