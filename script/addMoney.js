document.getElementById("add-money").addEventListener("click",function(event){
 event.preventDefault();
 const amount=document.getElementById("amount").value;
 const conVertedAmount = parseFloat(amount);
 const pin = document.getElementById("pin").value;
 const conVertedPin = parseInt(pin);
 const mainBalance =document.getElementById("main-balance").innerText;
 const conVertedMainBalance=parseFloat(mainBalance);
 if (conVertedPin===1234) {
    const sum=conVertedMainBalance + conVertedAmount;
    document.getElementById("main-balance").innerText=sum 
 }
 else {

 }
})