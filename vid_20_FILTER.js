 let mynum=[1,2,3,4,5,6,7,8,8];
 //we us () so no need to RETURN keyword in return vals
 const newnum =mynum.filter((num)=> num<5)
 //console.log(newnum); 

 //we  use {} to write condition then we need to RETURN keyword

 const myname=["tiksha","amit","sagar","abhay","amar"];

 let newname=myname.filter((name)=>{
               return name==="tiksha";

 })
 //console.log(newname);

 //filter in object 

 const obj=[
{name:"tiksha",per:89,year:4},
{name:"amit",per:69,year:3},
{name:"sagar",per:99,year:4},
{name:"abhay",per:49,year:3},
{name:"amar",per:89,year:4},
{name:"ganu",per:59,year:2},
{name:"ram",per:79,year:9},
 ];


 const newarr=obj.filter((names)=>{
            return    names.per>50;


 })
 //console.log(newarr);


 const newarray= obj.filter((names1)=>{
          return names1.name==="ram" && names1.per>60;

 })

 //console.log(newarray);



