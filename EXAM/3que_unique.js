// Write a function that will print only unique elements in an array
// Input arr : [ 21, 23, 12, 21, 23, 45, 12, 23, 45, 32 ]
// Output:  21 23 12 45 32

let a=[ 21, 23, 12, 21, 23, 45, 12, 23, 45, 32 ],new1=[100];
var  c=0;
for(let i=0;i<a.length;i++){
for(let j=0;j<a.length;j++){
    if(a[i]==a[j]){
        c++;
        
    }

    if(c>2){
     console.log(a[j]);
      new1[j]=a[j];
        c=0;
    }
}
}




