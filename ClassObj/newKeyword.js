// function show(name,color){
//     this.name=name;
//     this.color=color;
//               // console.log("inside fun :",name,color);
//              //return is optional
//               return this;
// }

// //new object create when we you (new) keywork
// //calling constructor when (new) keyword is used
// let data= new show("tiksha","pink")
// let data1= new show("pratiksha","orange");
// // console.log(name);
// //overide data
// console.log(data);
// console.log(data1);


function show(name,color){
    this.name=name;
    this.color=color;
              return this;
}
let data= new show("tiksha","pink")
let data1= new show("pratiksha","orange");
console.log(data);
console.log(data1);
