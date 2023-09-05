

function verifierEmail(email) {
    let regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    let resultat = regex.test(email)

    return resultat
}

function success() {
    let email = document.getElementById("email").value

    if (email === "") {
        console.log("Veuillez entrer une adresse e-mail.")
        return
    }

    let process = verifierEmail(email)

    if (process === true){
        let successBox = document.querySelector(".success-conteiner")
        successBox.classList.add("active")
    } else {
        console.log("L'adresse e-mail n'est pas valide.")
        document.getElementById("email").value = ''
    }
}

let btnEnvoyer = document.getElementById("submit")
btnEnvoyer.addEventListener("click", success)

