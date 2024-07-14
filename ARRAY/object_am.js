const arr = [
    {
        name: "amit",
        year: { school: 16, college: ["it", "cse", "mech"] }
    },
    { name: "kunal", age: 24 },
    { name: "sagar" },
    { name: "amita" }
];

for(let i =0; i<arr.length;i++){
    if(arr[i].name=="tiksha"){
        for (let j = 0; j < arr[i].year.college.length; j++) {
            console.log(arr[i].year.college[j]);
            
        }
        
        break;
    }
    if(i == arr.length-1){
        console.log("not found");
    }
}
// for(let i =0; i<arr.length;i++){
//     if(arr[i].name=="kunal"){
//         console.log("fouund");
//         break;
//     }
//     if(i == arr.length-1){
//         console.log("not found");
//     }
// }