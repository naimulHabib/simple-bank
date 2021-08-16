document.getElementById("button").addEventListener('click',function(){
    const emailOfUser = document.getElementById('user-email').value;
    const pasOfUser = document.getElementById('user-pas').value;
    const createEvent = document.getElementById('create')
    if(emailOfUser == 'naimulhabib2026@gmail.com' && pasOfUser == "abcdef"){
        window.location.href = "banking.html"
    }else{
        createEvent.innerText = '"Please Enter the right Password"'
    }
})