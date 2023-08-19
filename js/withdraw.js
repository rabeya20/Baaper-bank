document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('user-withdraw');
    const valueOfWithdraw = withdrawField.value;


    withdrawField.value = '';
    if(isNaN(valueOfWithdraw)){
        alert('Please provide a number');
        return;
    }

    const totalWithdarwAmount = document.getElementById('totalWithdarwAmount');
    const totalWithdraw = totalWithdarwAmount.innerText;
    
       
    
   

   
    const balanceTotalElement = document.getElementById('totalBalance');
    const previousAmountOfBalanace = balanceTotalElement.innerText;

    if(parseFloat(valueOfWithdraw) > parseFloat(previousAmountOfBalanace)){
        alert('Baap Er Bank a ato taka nei');
        return;
    }

    const total = parseFloat(valueOfWithdraw) + parseFloat(totalWithdraw);
    totalWithdarwAmount.innerText = total;
      balanceTotalElement.innerText = parseFloat(previousAmountOfBalanace) - parseFloat(valueOfWithdraw); 

      
       
      
    
   
   
})