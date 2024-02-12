// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

// Input array = [ 12, 45, 23, 19, 78]
// Output  = 66 
// Explanation  largest difference means subtraction of any two elements in array 
// 66 because 78 - 12 = 66
// If we take 45-12 = 33 (not greater than 66)
// etc.

let arr=[12, 45, 23, 19, 78],i,j,temp=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
           
        }
    }
}

// for(let k=0;k<arr.length;k++)
// console.log(arr[k]);

// console.log(arr[0]);
// console.log(arr[arr.length-1]);

console.log("the largest diff in array is=");
console.log(arr[0]-arr[arr.length-1]);
