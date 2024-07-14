const a=[10,20,30,40];

for(const i in a){
   // console.log(a[i]);
}


//not work for map

// const map = new map()
// map.set("pr","pratiksha")
// map.set("ab","abhay")
// map.set("sg","sagar")

// for(let key in map){
//    // console.log(key);
// }

const myObject={

    name:"tiksha",
    favlang:"js",
    favfrut:"mango"

}
//return key
for (const key in myObject){
   // console.log(` key :${key}`);
}
//return key with value

for(const key in myObject){
  //  console.log(`value of key is :${myObject[key]}`);
}

//key values

for(const key in myObject){
    console.log(` ${key} :-  ${myObject[key]}`);
}
