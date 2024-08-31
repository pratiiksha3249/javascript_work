const fun=function(str){
    console.log(str,Date.now());
}

const inID=setInterval(fun,1000,"pratiksha");

clearInterval(inID);