

const firebaseConfig = {
  apiKey: "AIzaSyDz-qIalLSfb8EdqRl4C-4GF1s5yhfAE4o",
  authDomain: "portfolio-f5274.firebaseapp.com",
  projectId: "portfolio-f5274",
  storageBucket: "portfolio-f5274.appspot.com",
  messagingSenderId: "281385654496",
  appId: "1:281385654496:web:0d4957e2a47b3c0cb2d885",
  measurementId: "G-D0X8PF0H1W"
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
