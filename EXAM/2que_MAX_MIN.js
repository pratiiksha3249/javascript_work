// Find the maximum and minimum number in an array :
// Write two functions for one for maximum and another for minimum take array as input
// Input arr [ 23, 56, 45, 34, 12 , 89] 
// output:
// Max = 89
// Min = 12

// let a=[ 23, 56, 455, 34, 12 , 89],max=0; 

// for(let i=0;i<a.length;i++){
// if(a[i]>max){
//     max=a[i];
// }

// }

// console.log("max num is ="+max);



let a=[ 23, 56, 455, 34, 12 , 89,1,12],temp; 

for(let i=0;i<a.length;i++){
for(let j=0;j<a.length;j++){
      if(a[i]>a[j]){
           temp=a[i];
           a[i]=a[j];
           a[j]=temp;
         
      }
}
}

// console.log(max);
console.log("minumum value is ="+a[a.length-1]);
