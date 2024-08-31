function sum(a,b){
          console.log(a+b);
}

function cal(a,b,callback){
    // sum(5,6);
    console.log("ram");
    callback(a,b);
}

cal(1,3,sum)