function show(name,color){
      this.name=name;
      this.color=color;
                // console.log("inside fun :",name,color);
                return this;
}

 let data=show("tiksha","pink")
let data1=show("pratiksha","orange");
// console.log(name);
//overide data
console.log(data);
console.log(data1);
