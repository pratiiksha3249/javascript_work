const promisehold= new Promise(function(resolve,reject){

     setTimeout(function(){
             let error=true;

             if(!error){
            resolve({username:"tiksha",pass:"123"});
             }
             else{
                reject("something went wrong....")
             }

     },1000)

});

 async function promise1(){

     try {
         
         const responce=await promisehold
                   }catch(error){
                          console.log(error);
                   }
  
  
  
     //  console.log(responce);
 }
 



