let conteiner1 = document.querySelector(".conteiner1")
let conteiner2 = document.querySelector(".conteiner2")
let prev = document.getElementById('prev')
let next = document.getElementById('next')

function upgrade() {
    let b = 'block'
    let n = 'none'
    conteiner1.style.display = b
    conteiner2.style.display = n
    prev.addEventListener('click', () => {
        if (conteiner1.style.display == b && conteiner2.style.display == n) {
            conteiner1.style.display = n
            conteiner2.style.display = b
        } else {
            conteiner1.style.display = b
            conteiner2.style.display = n
        }
    })
    next.addEventListener('click', () => {
        if (conteiner1.style.display == b && conteiner2.style.display == n) {
            conteiner1.style.display = n
            conteiner2.style.display = b
        } else {
            conteiner1.style.display = b
            conteiner2.style.display = n
        }
    })
}
upgrade()

function cadastrar() {
    let inputName1 = document.querySelector("#inputName1")
    let inputPassWord1 = document.querySelector("#inputPassWord1")
    
    if (inputName1.value == "" || inputPassWord1.value == "") {
        alert("Preencha todos os campos necessários")
    } else {
        let n = inputName1.value
        let n1 = inputPassWord1.value
        
        localStorage.setItem('user', JSON.stringify(n))
        localStorage.setItem('pass', JSON.stringify(n1))
        
        alert("Dados Salvos")
        
        conteiner1.style.display = 'none'
        conteiner2.style.display = 'block'
    }
    inputName1.value = ""
    inputPassWord1.value = ""
}
function entrar() {
    let inputName = document.querySelector("#inputName")
    let inputPassWord = document.querySelector("#inputPassWord")
    
    if (inputName.value == "" || inputPassWord.value == "") {
        alert("Preencha todos os campos necessários")
        document.querySelector("#sms").innerText = ""
    } else {
        let n = JSON.parse(localStorage.getItem('user'))
        let n1 = JSON.parse(localStorage.getItem('pass'))
        
        if (inputName.value == n && inputPassWord.value == n1) {
            document.querySelector("#sms").innerHTML = `Dados confirmados, bem-vindo <strong>${n}</strong>`
        } else {
            document.querySelector("#sms").innerText = "Os dados não conferem, verifique os dados e tente novamente"
        }
    }
    inputName.value = ""
    inputPassWord.value = ""
}