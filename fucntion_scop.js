function A_BIG() {
    console.log("i am big ...");
 
       B_middal();
       C_small();
    function B_middal() {
        console.log("i am middal..");
        //  C_BIG();
     
        }

        function C_small() {
            console.log("i am small....");
        //    A_BIG();
          B_middal();

        }
  
}
//  B_middal();
 A_BIG();
//  C_small();
