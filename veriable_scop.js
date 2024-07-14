function varScop(userName){

    if(true){
        var a=10+20;
        let k=10+30;
        const c=80+1;
        console.log(a);
        //  const p=9;
        //we cant access veriable outside the scope
        console.log(p);

    }
           console.log(`username is ${userName}`);
           console.log(a);
           const p=30+40;
           console.log(p);
           //k is not in scop
          // console.log(k);
          // console.log(c);
}
varScop("tiksha\n");
varScop("ovi");