document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('user-deposit');
    const valueOfDeposit = depositField.value;

    depositField.value = '';
    
    if(isNaN(valueOfDeposit)){
        alert('Please provide a number');
        return;
    }


    const totalDepositAmount = document.getElementById('totalDepositAmount');
     const totalDeposit = totalDepositAmount.innerText;
     totalDepositAmount.innerText = parseInt(valueOfDeposit) + parseInt(totalDeposit);
     
    
   

     const balanceTotalElement = document.getElementById('totalBalance');
     const previousAmountOfBalanace = balanceTotalElement.innerText;
     balanceTotalElement.innerText = parseFloat(previousAmountOfBalanace) + parseFloat(valueOfDeposit); 

})