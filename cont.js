window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});
/*formulaire de contact*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Veuillez remplir tous les champs.";
        formMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Veuillez entrer une adresse email valide.";
        formMessage.style.color = "red";
        return;
    }

    // Appeler la fonction pour envoyer le message sur WhatsApp
    sendToWhatsApp(name, email, message);

    formMessage.textContent = "Votre message a été envoyé avec succès !";
    formMessage.style.color = "green";

    // Réinitialiser le formulaire
    document.getElementById("contactForm").reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendToWhatsApp(name, email, message) {
    const phoneNumber = "2250172826265"; // Remplacez par le numéro WhatsApp de l'entreprise (avec l'indicatif pays)
    const whatsappMessage = `Bonjour, je suis ${name}. Mon email est ${email}. Voici mon message : ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirige vers WhatsApp
    window.open(whatsappURL, "_blank");
}