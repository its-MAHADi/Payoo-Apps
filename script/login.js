document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const acountNumber= document.getElementById("acount-number").value;
    const pin= document.getElementById("pin").value;
    const conVertedPin=parseInt(pin);
    if(acountNumber.length===11) {
       if(conVertedPin===1234){
        window.location.href="./main.html"
       }
       else{
        alert("pin tikh nai")
       }
    }
    else{
        alert("need valid account number")
    }
    
})
