const mynum=[11,22,33,444,55,"tiksha"];

let newname=mynum.map((num)=>
          {
            return num*2;
          }
)
//console.log(newname);

//without RETURN keyword

 newname=mynum.map((num)=>(num-2));
        
console.log(newname);