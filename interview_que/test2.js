// const numbers = [1, 2, 3, 4, 5];
// let newarr=numbers.map((n)=>{
//     return n*n;
// })
// console.log(newarr);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr=numbers.filter((n)=>{
    return n%2==0;
})
console.log(newarr);