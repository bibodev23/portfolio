const firebaseConfig = {
    apiKey: "AIzaSyChgVdkzeLFCYt1BGB5BIRSGVZxgJOLO6M",
    authDomain: "portfolioboualem.firebaseapp.com",
    projectId: "portfolioboualem",
    storageBucket: "portfolioboualem.appspot.com",
    messagingSenderId: "801003480623",
    appId: "1:801003480623:web:8982116db29ace7b3108da",
    measurementId: "G-XH41GYQDSB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const form = document.getElementById("myForm")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const prenom = document.getElementById("prenomInput").value;
    const nom = document.getElementById("nomInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    console.log("Prénom: " + prenom);
    console.log("Nom: " + nom);
    console.log("Email: " + email);
    console.log("Message: " + message);

    let erreurs = [];
    if (prenom.trim() ==="") {
        erreurs.push("Le prenom est requis");
    }
    if (nom.trim() ==="") {
        erreurs.push("Le nom est requis");
    }
    if (email.trim() ==="") {
        erreurs.push("L'email est requis");
    } else if (!isValidEmail(email)) {
        erreurs.push("Votre email n'est pas valide, il doit contenir un '@' et un domaine valide !")
    }
    if (message.trim() ==="") {
        erreurs.push("Veuillez inscrire votre message");
    }

    if (erreurs.length>0) {
        erreurs.forEach(function(erreur) {
            alert(erreur);
        })
    } else {
            db.collection("formData").add({
            prenom: prenom,
            nom: nom,
            email: email,
            message: message
          })
    }

    function isValidEmail(email) {
        // Expression régulière pour valider l'email
        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
      }

    form.reset();
})

function apparition(){
    let textApparition = document.getElementById("textCache");
    if (textApparition.className.indexOf("textReveal")==-1) {
        textApparition.className += "textReveal";
    } else {
        textApparition.className = textApparition.className.replace("textReveal", "");
    }
}

let navLinks = document.querySelector(".navNarrow");
let narrowLinks = document.querySelector(".narrowLinks");


navLinks.addEventListener("click", toggle);

function toggle() {
    narrowLinks.classList.toggle("hidden")
}
