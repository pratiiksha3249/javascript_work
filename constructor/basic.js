class friend{
  constructor (name,per,age){
    this.name=name;
    this.per=per;
    this.age;
         console.log("your name is :"+name);
         console.log("your name is :"+age);
         console.log("your name is :"+per);
  }
 school(sname){
    console.log("college name is :"+sname);

 }

 collage(cname){
console.log("college name is :"+cname);


 }
}
let ob=new friend("tiksha","98",20)
ob.school("vidhyamandir");
// console.log(this.name);