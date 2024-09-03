const students = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [70, 68, 65] },
    { name: "Charlie", scores: [95, 88, 92] },
    { name: "David", scores: [50, 45, 60] }
  ];

  let newa=students.map((data)=>{
               return data.scores;
  })
  console.log(newa);

  let p=newa.map((n)=>{
         return    n%3;
  })
//   console.log(p);