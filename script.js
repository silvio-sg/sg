function send() {
    let name = document.querySelector("#name")
    let sms = document.querySelector("#sms")
    
    let link = `https://wa.me/244943318124?text=Oi, sou ${name.value} ${sms.value}`;
    
    if (name.value == "" || sms.value == "") {
        alert('Preencha todos os campos')
    } else {
        window.open(link, "_blank")
    }
    
    name.value = ""
    sms.value = ""
}