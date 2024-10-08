const nameInput=document.getElementById('nameInput')
const emailInput=document.getElementById('emailInput')
const passwordInput=document.getElementById('passwordInput')
const btnRegister=document.getElementById('register')

let usersRegister=[]

if (localStorage.getItem('usersRegister') != null) {

    usersRegister=JSON.parse(localStorage.getItem('usersRegister'))

}


function getDataUser() {
if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "" ) {
    document.getElementById('errorInputs').classList.remove('d-none')
    document.getElementById('errorInputs').innerHTML='all inputs is requiered'
}else{
    document.getElementById('errorInputs').classList.add('d-none')
    let user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }

usersRegister.push(user)
location.href = './login.html'
localStorage.setItem('usersRegister',JSON.stringify(usersRegister))
}   
}


btnRegister.addEventListener('click',(e)=>{
    e.preventDefault();
    getDataUser()
    console.log(usersRegister);
    
})