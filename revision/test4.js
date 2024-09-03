const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 15 }
  ];

  let newr=people.filter((data)=>{
    return data.age>18;
  })
  console.log(newr)