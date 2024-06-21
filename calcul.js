const disp=document.getElementById("display");
function appendToDisplay(input){
  disp.value+=input;
}
function calculate(){
    try{
       disp.value=eval(disp.value);
    }
    catch(error){
        disp.value="Error";

    }
    

}
function clearElem(){
   disp.value="";
}
function deleteElem(){
    disp.value=disp.value.slice(0,-1);
}