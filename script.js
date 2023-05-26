let PassWordlength = 8
const InputEl = document.querySelector('#password')
const uppercaseCheck = document.querySelector('#uppercaseCheck')
const Numbercheck = document.querySelector('#Number-check')
const Simboloscheck = document.querySelector('#Simbolos-check')

function CrietPassWord() {
  const chars = "abcdefghijklmnopqrstuwxy"
  const Uppercase = "ABCDEFGHKLMNOPQRSTUWXYZ"
  const Numbers = "123456789"
  const Symbus = "?!@&*"

 if(uppercaseCheck.checked) {
  chars =+ Uppercase
 }
 if(Numbercheck.checked) {
  chars =+ Numbers
 }
 if( Simboloscheck.checked) {
  chars =+ Symbus
 }

  let PassWord = ""

    for( let i = 0; i < PassWordlength; i++) {
       const randomNumber = Math.floor(Math.random() * chars.length)
       PassWord += chars.substring(randomNumber,randomNumber + 1)
  
    }
    InputEl.value = PassWord

}

// Copiando txt da área de input copy()
 function copy(){
    navigator.clipboard.writeText(InputEl.value)
  }

  const Copy01 = document.querySelector('#btn')
  Copy01.addEventListener('click', copy)

  const Copy02 = document.querySelector('#Copy-1') 
  Copy02.addEventListener('click', copy)

  uppercaseCheck.addEventListener('click', CrietPassWord)
  Numbercheck.addEventListener('click', CrietPassWord)
  Simboloscheck.addEventListener('click', CrietPassWord)

  const PassWordElement = document.querySelector('#password-length')
   PassWordElement.addEventListener("input",  () =>{
    PassWordlength = PassWordElement.value
    CrietPassWord()
  })

CrietPassWord()