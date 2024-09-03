const products = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 5 },
    { name: "Cherry", price: 25 },
    { name: "Date", price: 30 }
  ];
//   output = ["Cherry", "Date"]

let narr=products.filter((data)=>{
            if(data.price>20){
                return data.name;
            }
})
// console.log(narr);

let nr=narr.map((n)=>{
         return n.name
})
console.log(nr)