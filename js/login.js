const emailInput=document.getElementById('emailInput')
const passwordInput=document.getElementById('passwordInput')
const btnLogin=document.getElementById('login')

let usersRegister=[]
usersRegister=JSON.parse(localStorage.getItem('usersRegister'))


btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    getDataUser()    
})


function getDataUser() {
if ( emailInput.value == "" || passwordInput.value == "" ) {
    document.getElementById('errorInputs').classList.remove('d-none')
    document.getElementById('errorInputs').innerHTML='all inputs is requiered'
}else{
    document.getElementById('errorInputs').classList.add('d-none')
for (let i = 0; i < usersRegister.length; i++) {
       
    if (usersRegister[i].email === emailInput.value && usersRegister[i].password === passwordInput.value ) {
        let userName=usersRegister[i].name
        console.log('true');
       localStorage.setItem('userLogin',userName)
       location.href = './home.html'
    
    }else{
        console.log('false');
        document.getElementById('errorInputs').innerHTML='user not singup'
    }
}

}   
}