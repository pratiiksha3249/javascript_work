// const obj = { name: "rajesh", age: 13, gender: false };
// console.log(obj.name);

const arr = [
    {
        name: ["amit", "tiksha", "ovi", "sagar"],
        year: { school: 16, college: 20 }
    },
    { name: "kunal", age: 24 },
    { name: "sagar" },
    { name: "amita" }
];
// console.log(arr.length)
const size  = arr.length;
// console.log(arr[1].name[0])
// const input = "kunal";
const naaav = ["a", "b", "c", "d"];

for(let i =0; i<naaav.length;i++){
    if(naaav[i]=="tiksha"){
        console.log("found");
        break;
    }
    if(i== naaav.length-1){
        console.log("not found");
    }
}