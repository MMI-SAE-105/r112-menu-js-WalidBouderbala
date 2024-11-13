document.querySelector(".menu-btn").addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;
    console.log("Le menu est fermé : ", isOpen, "Le menu est ouvert : ", isClosed);

    const nav = document.querySelector(".menu");

    // Alterner les attributs ARIA pour ouvrir ou fermer le menu
    nav.setAttribute("aria-hidden", isOpen ? "true" : "false"); 
    this.setAttribute("aria-expanded", isOpen ? "false" : "true"); 
});



`// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-menu");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  nav.setAttribute("aria-expanded", "false");
  toggle.classList.toggle("active");
});`