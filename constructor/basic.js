class friend{
  constructor (name,per,age,cname){
    //if this. use then we can use this values any where in this class 
    //but only in this class
    this.name=name;
    this.per=per;
    this.age=age;
    this.cname=cname;
         console.log("your name is :"+name);
         console.log("your age is :"+age);
         console.log("your per is :"+per);
         console.log("clg name is in constructor :"+cname);
  }
 school(sname){
  console.log("in function values :");
    // console.log("college name is :"+sname);
    console.log("your name is :"+this.name);
    console.log("your age is :"+this.age);
    console.log("your per is :"+this.per);
 }

 collage(cname){
  // cname="cdj";
console.log("college name is :"+cname);
// console.log("clg name is in function local :"+this.cname);


 }
}
let ob=new friend("tiksha","98",20,"rammandir")
ob.school("vidhyamandir");
// console.log(this.name);