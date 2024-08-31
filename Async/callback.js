function show(data,getnextdata){
    setTimeout(function(){

        console.log("id is :",data);
        if(getnextdata){
            getnextdata();
        }
    
},2000);
}
//Callback HELL
show(11,()=>{
    show(22,()=>{
        show(33,()=>{
            show(44);
        });
    });
});