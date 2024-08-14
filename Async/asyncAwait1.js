function getdata(id){
    return new Promise(function(resolve,reject){
        console.log("done");
                 setTimeout(function(){
                     console.log("work done",id);
                     resolve("succussfully");
                 },1000)
    });
}

 async  function getdatacall(){
                 await getdata(11);
                 await getdata(13);
 }


