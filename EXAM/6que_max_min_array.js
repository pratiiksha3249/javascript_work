// Implement a function that finds the second smallest elemen and second largest element in an array of integers.
// Input : arr [ 12, 34, 56, 15, 90]
// Output :  max = 56 min = 15


let arr=[12, 34, 56, 15, 90],max=0,max1=0,temp=0;


for(let i=0;i<arr.length;i++){
for(let j=0;j<arr.length;j++){
      
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
           
       }
}


}

console.log("secound min number is ="+arr[arr.length-2]);
console.log("secound max number is ="+arr[1]);

