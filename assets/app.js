// 1 1. **vérifiez la présVence des boutons dans votre HTML.**

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cookieModal');
    const acceptBtn = document.getElementById('acceptCookies');
    const refuseBtn = document.getElementById('refuseCookies');

    // Je cree une fonction  pour créer un cookie avec une durée de validité  30 jours
    function monCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 864e5)); // jours en millisecondes
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
    monCookie("capital" ,"londre", 30)

    // je cree une fonction pour lire un cookie


   
   // Fonction pour créer un cookie avec une durée de validité
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // jours en millisecondes
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Fonction pour lire un cookie
    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(name + "=") === 0) {
                return c.substring(name.length + 1, c.length);
            }
        }
        return "";
    }

    // Affiche ou cache la modale selon le cookie
    if (!getCookie("cookiesConsent")) {
        modal.style.display = 'block';
    }

    // Lorsqu'on accepte
    acceptBtn.addEventListener('click', () => {
        setCookie("cookiesConsent", "accepted", 30);
        modal.style.display = 'none';
    });

    // Lorsqu'on refuse
    refuseBtn.addEventListener('click', () => {
        setCookie("cookiesConsent", "refused", 30);
        modal.style.display = 'none';
    });
});
