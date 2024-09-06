class subject{
            constructor(name){
          this.name=name;
                 }
     book(bname) {
        this.bname=bname;
        // console.log(`book name is :${bname}`);
        
        
    }
    class1(cname){
        this.cname=cname;
      let  name="ram";
        console.log(`class name is :${cname}`);
        console.log(`book name is :${this.bname}`);
        console.log(` local var name is :${name}`);
        console.log(`global var name is :${this.name}`);

    }
}

let ob=new subject("pratiksha");
ob.book("javascript...");
ob.class1("ty");
// console.log(cname);