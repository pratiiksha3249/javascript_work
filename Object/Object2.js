// const product= new Object()
// console.log(product);

const product1={

}
//add values in object


product1.id=123;
product1.name="tiksha";
product1.add="nagar"

console.log(product1);

const newobj={
    girsl:{
           one:"tiksha",two:"ovi",three:"vrunda",
           boys:{
            one1:"ram",two2:"sham",three:"aman"
           }

    }
}
console.log(newobj.boys);
//marge two objects
let a={1:"one",2:"two",3:"three"}
let b={11:"one1",22:"two2",33:"three3"}
let c={12:"one2",23:"two2",34:"three4"}

let m=Object.assign(a,b,c)
let kk={...a,...b,...c}
console.log(m);
console.log(kk);

const newobj1=[
    girsl1={
           one:"tiksha",two:"ovi",three:"vrunda",
           boys1:{
            one1:"ram",two2:"sham",three:"aman"
           }

    }
    
]
// console.log(newobj1);
//console.log(Object.keys(boys1));

let test={
    one:["ram","sham"],
    two:["ram","sham"],
    three:["ram","sham"],
    me:{
        a:"ramshri"
    }
}
//collect all keys of object
console.log(Object.keys(test));
console.log(Object.values(test));
