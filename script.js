const api_url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const Inputbox = document.getElementById("input-qr");
const Generatebtn = document.getElementById("generate");
const qrImage = document.getElementById("drImage");
const imgBox = document.getElementById("imgBox");

function generateQRCODE(){
    if(Inputbox.value === ""){
        alert("You must enter a text")
    }else{
        qrImage.src = `${api_url} + ${Inputbox.value}`; 
        imgBox.classList.add("show-img");
    }
    
}

Generatebtn.addEventListener("click", ()=>{
    generateQRCODE();
});
