const newobj1=[
    girsl1={
           one:"tiksha",two:"ovi",three:"vrunda",

           boys1:{
            one1:"ram",two2:"sham",three:"aman"
           }

    },
    
    book1={
            title:"book1",
            price:500,
            name:"balguru",
            type:"joke"
    },

    book2={
            title:"book2",
            price:5040,
            name:"sham",
            type:"coding"
    },

    book3={
            title:"book3",
            price:5010,
            name:"sai",
            type:"commerce"
    },
    
    book4={
            title:"book4",
            price:900,
            name:"surya",
            type:"computer"
    }
  
    
]

//1) select all book price-------------------------------------
//console.log(newobj1[1].title);
var total=0;
for(let i=0;i<newobj1.length;i++){
        // console.log(newobj1[i].price);
        total=total+newobj1[i].price;
      
}
//console.log(total);


//2)select book which type is computer------------------------------------

const bookSection=newobj1.filter((bname)=>{
        return bname.type==="computer";
})
//console.log(bookSection);

const bselect=newobj1.filter((bnamee)=>bnamee.type==="joke")
//console.log(bselect);

//3)select book which have coding type and price is greter than 5000-----------------

let bnm=newobj1.filter((selectbook)=>{
        return selectbook.type==="coding" && selectbook.price>=5000;
})
//console.log(bnm);

//4)replace type joke of book which price is 500--------------------------------
let updateb=newobj1.filter((upbook)=>{
         if(upbook.type==="joke" && upbook.price==500)
         {
                     return upbook.type="tiksha's book";
         }
         
        })
        
        console.log(updateb);