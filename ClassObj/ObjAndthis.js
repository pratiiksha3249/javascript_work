let obj={
    name:"tiksha",
    pass:123,
    favcolor:"skyblue",
    getuser:function(){
        console.log(`username is :${this.name}`);
        console.log(this)
    }
     
}
// console.log(obj.pass);
// console.log(obj.getuser());
console.log(this)
