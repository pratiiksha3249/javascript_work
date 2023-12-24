//let a=[11,22,33,44,55,66,77,88,99];

// for(let key in a){
// if(a[key])

// console.log(a);
// }

// for(let key in a){
//     console.log(a[key]);
// }


// let a=[11,22,33,44,55,66,77,88,99,

// rec={
//       name:"tiksha",
//       age:20,
//       per:83,
//       add:"pune"
// }

// ];

// for(let key in rec){
// console.log(rec[key])
// }



let a=[

{
      name:"tiksha",
      age:20,
      per:83,
      add:"pune"
},
{
    name:"sham",
    age:21,
    per:81,
    add:"mumbai"
},
{
    name:"mayuri",
    age:10,
    per:75,
    add:"sonai"
},
{
    name:"sonal",
    age:10,
    per:75,
    add:"nashik"
}
];


// for(let key in a){
//     if(a[key]['name']=='tiksha')
//     console.log("done");
// break;
//    // console.log(a[key]['name'])
// }


// for(let key in a){
//     if(a[key]['per']==75){
//         console.log(a[key]['name']);
//     }
// }


for(let key in a){
    if(a[key]['per']==75){
        console.log(a[key]);
    }
}

