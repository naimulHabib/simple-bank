document.getElementById('deopsit-button').addEventListener('click',function(){
    const deopsitInput = document.getElementById('deposit-input')
    const depositAmount = parseFloat(deopsitInput.value);
    // console.log(depositAmount)
    const depositTotal = document.getElementById('deposit-total');
    //
    const currentDepositAmount = parseFloat( depositTotal.innerText);
    const newDepositAmount = currentDepositAmount + depositAmount;
    console.log(newDepositAmount)
    depositTotal.innerText = newDepositAmount;
    
    //Clear the deposit Field
    deopsitInput.value = "";
    //update main blacve ...
    const mainBlance =document.getElementById('main-blance')
    const mainBlanceText = mainBlance.innerText;
    const previousBlance = parseFloat(mainBlanceText);
    const newBlanceAmount = previousBlance + newDepositAmount;
    mainBlance.innerText = newBlanceAmount;
            
})
///// Handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const getWithdrawValue = parseFloat(withdrawInput.value);
    
    const withdrawAmount = document.getElementById('withdrw-total');
    // const withdrawAmountText = withdrawAmount.innerText;
    

    /// update withdraw amount
    withdrawAmount.innerText = getWithdrawValue;

    // clear withdraw field
    withdrawInput.value = "";
    
    // claculation of Main balnce.
    const mainBlance =document.getElementById('main-blance')
    const mainBlanceText = mainBlance.innerText;
    const previousBlance = parseFloat(mainBlanceText);
    const newBlanceAmount = previousBlance - getWithdrawValue;
    mainBlance.innerText = newBlanceAmount;
    
    
    
})


