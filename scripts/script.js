//the third.
function verifierEmail(email) {
    let regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    let resultat = regex.test(email)

    return resultat
}

function errorState() {
    let errorEmail =    document.getElementById("email") 
    
    errorEmail.style.border = "2px solid orange"
    errorEmail.style.backgroundColor = "rgba(255, 166, 0, 0.1)"
    errorEmail.setAttribute("placeholder", "ash#loremcompany.com")

    document.querySelector(".opacityZero").style.opacity = "1"
}

function validateState(email){
    let successBox = document.querySelector(".success-conteiner")
    successBox.classList.add("active")
    const emailSend = document.querySelector(".text-content span")
    emailSend.textContent = email
}


function success() {
    const baliseEmail = document.getElementById("email")
    const email = baliseEmail.value


    let process = verifierEmail(email)

    if (email === "") {
        //console.log("Veuillez entrer une adresse e-mail.")
        errorState()
        return
    }else if (process === true){
        validateState(email)
        const mainConteiner = document.querySelector(".main-conteiner")
        mainConteiner.classList.add("opacity")
    } else {
        //console.log("L'adresse e-mail n'est pas valide.")
        errorState()
        document.getElementById("email").value = ''
    }
}

function dismissPopUp(){
    let successBox = document.querySelector(".success-conteiner")
    successBox.classList.remove("active")

    const mainConteiner = document.querySelector(".main-conteiner")
    mainConteiner.classList.remove("opacity")

    document.getElementById("email").value = ''
}

function newsletterSignUp(){
    let btnDismiss = document.getElementById("dismiss")
    btnDismiss.addEventListener("click", dismissPopUp)

    let btnEnvoyer = document.getElementById("submit")
    btnEnvoyer.addEventListener("click", success)
}