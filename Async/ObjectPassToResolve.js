const promisehold= new Promise(function(resolve,reject){
          setTimeout(function(){
             resolve({name:"tiksha",pass:"123"})
          },1000)
})


promisehold.then(function(user){
    console.log(user);
})

