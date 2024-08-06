// const promise1= new Promise(function(resolve,reject){
// setTimeout(function(){
//     //why is not work before this "async task"
//     resolve();
//     console.log("async task...");
// },1000)

// })
// promise1.then(function(){
//     console.log("promise consumed..");
// })

//------------------secound way---------------------

// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("async task 2..");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("asyc 2 resolve..");
// })

//-------------------------------third way--------------------------
//not work
//  const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//                 //  console.log(" data is provided...");
//                  reject({"name":"tiksha","pass":"123"});
//     },1000)
// })

// promise3.then(function(user){
//     // console.log("data not provided..");
//             console.log(user);
// })


let error;
const pro4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        error = false;
        if (!true) {
            resolve({ name: "tiksha" })
        }
        else {
            reject("ERROR : something is gonna wrong..");
        }
    }, 1000)
})

const uname = pro4.then((user) => {
    console.log(user);
    return uname.name;

}).then((username) => {
    console.log(username);
}).catch(function (errror) {
    console.log(errror);
}).finally(function(){
    console.log("promise is resolve or rejected......");
})









