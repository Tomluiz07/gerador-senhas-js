let PassWordlength = 8
const InputEl = document.querySelector('#password')

function CrietPassWord() {
  const chars = "abcdefghijklmnopqrstuwxyvABCDEFGHKLMNOPQRSTUWXYZ123456789?!@&*"

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
  const button = document.querySelector('#btn')
  button.addEventListener('click', copy)


  const PassWordElement = document.querySelector('#password-length')
   PassWordElement.addEventListener("input",  () =>{
    PassWordlength = PassWordElement.value
    CrietPassWord()
  })

CrietPassWord()