// person: {
//     name: "Alice",
//     age: 25,
//     address: {
//      city: "Seattle",
//       zip: 98101
//     }
//   },
//   pets: [
//     {
//       type: "dog",
//       name: "Motya",
//       age: 3
//     },
//     {
//       type: "cat",
//       name: "Whiskers",
//       age: 5
//     }
//   ],
//   favoriteFoods: {
//     breakfast: ["pancakes", "idli", "pohe"],
//     lunch: ["sandwich", "salad", "soup"],
//     dinner: ["khichadi", "pasta", "bhaji"]
//   }


// Q4 Write a function to find the pet with the shortest name in person object
// Output: Max


person={
    name:"Alice",
    age: 25,
    address: {
     city: "Seattle",
      zip: 98101
    }
  },
  pets=[
    {
      type: "dog",
      name: "Motya",
      age: 3
    },
    {
      type: "cat",
      name: "Whiskers",
      age: 5
    },
    {
      type:"cow",
      name:"mona",
      age:15,
    }

  ],
  favoriteFoods= {
    breakfast: ["pancakes", "idli", "pohe"],
    lunch: ["sandwich", "salad", "soup"],
    dinner: ["khichadi", "pasta", "bhaji"]
  }

  //for(let i=0;i<person.length;i++)
//   console.log(person.pets);
let max=0;
for(let i=0;i<pets.length;i++)
for(let j=0;j<pets.length;j++){

{
      if(pets[i].name.length<pets[j].name.length){
        max=pets[i].name;
      }
}
}
console.log(max);



