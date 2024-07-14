const mysym=Symbol("key");
                           //imp for inteviwe sym create
                          // and add in obj and display
let obj={
    name:"tiksha",
    clg:"cdj",
    rno:"235227",
    color:["orange","brown"],
    boysname:{
             ram:"sharma",
             sai:"kumar",
             suraj:"sen"
    },
    [mysym]:"key1"

    
}
console.log(obj);

//two way to access obj values
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[mysym]);

//object value update
obj.name="mrudula";
console.log(obj);

//when we dont want to change object values
// object.freeze(obj);
// obj.name="ovi";
// console.log(obj);

//function
obj.me=function(){
  console.log("good morning coder...");  
}
console.log(obj.me());


//we can acces object values
obj.me1=function(){
  console.log('good morning coder,${this.name}');  
}
console.log(obj.me1());
