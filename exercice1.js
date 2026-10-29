function calculerMoyenne ( note1 ,note2,note3){
    return ( note1 + note2 +note3 ) /3 
}
 console.log(calculerMoyenne(12,14,18));
 
 function estAdmis () {
 const moyenne = calculerMoyenne
 if (moyenne >= 10)
 {
    return "admis";
 }
 else return "non admis";

 }
 
 function calculerPrix