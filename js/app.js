// console.log('js added');

function generatePin(){
    const pin=getPin();
    const displayPin=document.getElementById('pin-display');
    displayPin.value=pin;
}

function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
        // console.log('got a 3 digit and calling again',pin);
        return getPin();
    }
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number=event.target.innerText;
    const calc=document.getElementById('submit-pin');
    if(isNaN(number)){
        if(number=='C'){
            calc.value='';
        }
    }
    else{
        
        const previousCalc=calc.value;
        const newCalc=previousCalc+number;
        calc.value=newCalc;
    }
})

function verifyPin(){
    const currentPin=document.getElementById('pin-display').value;
    const matchField=document.getElementById('submit-pin').value;

    const sMsg =document.getElementById('notify-success');
    const fMsg=document.getElementById('notify-failure');
    if(currentPin==matchField){
       sMsg.style.display='block';
       fMsg.style.display='none';
    }
    else{
       fMsg.style.display='block';
       sMsg.style.display='none';
    }
}