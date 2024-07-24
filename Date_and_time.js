let myDate=new Date();
// console.log(myDate);

//we can convert time and date with

//console.log(myDate.toDateString());
// console.log(myDate.getDay());

//Date its type is object
// console.log(typeof myDate);

//year month day
let newdate=new Date(2024,4,12);
console.log(newdate);
console.log(newdate.toDateString());

//its valid js automaticly convert year acording 
//addition month days like month is 48
let newdate2=new Date(2024,48,12);

//also we can add time in this date
let newdate3=new Date(2024,4,12,7,33,6);
console.log(newdate3.toLocaleTimeString());
console.log(newdate3.toLocaleString());

//india method of date
let newdate4 =new Date ("2022-01-18");
console.log(newdate4);

//********************TIME****************************
console.log("TIME Methods");
let myTime= Date.now();
// console.log(myTime.getTime());
console.log(newdate4.getTime());
console.log(newdate4.getDay());
console.log(newdate4.getMonth());

//LocalString 

newdate.toLocaleString('default',{
    weekday:"long",
    // hour:"2-digit"
});