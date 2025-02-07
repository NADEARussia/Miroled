
const translations = {
    "ru": {
        "home": "Главная",
        "gallery": "Галерея",
        "about": "О нас",
        "contact": "Контакты",
        "welcome": "Добро пожаловать в MiroLED",
        "description": "Мы создаем стильные и современные зеркала с подсветкой."
    },
    "ro": {
        "home": "Acasă",
        "gallery": "Galerie",
        "about": "Despre noi",
        "contact": "Contacte",
        "welcome": "Bine ați venit la MiroLED",
        "description": "Creăm oglinzi moderne și elegante cu iluminare."
    },
    "en": {
        "home": "Home",
        "gallery": "Gallery",
        "about": "About Us",
        "contact": "Contacts",
        "welcome": "Welcome to MiroLED",
        "description": "We create stylish and modern mirrors with lighting."
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");
    languageSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[selectedLang][el.getAttribute("data-lang")];
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");
    languageSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[selectedLang][el.getAttribute("data-lang")];
        });
    });

    window.openModal = function(imageSrc, description) {
        document.getElementById("modal-img").src = imageSrc;
        document.getElementById("modal-desc").textContent = description;
        document.getElementById("modal").style.display = "block";
    };

    window.closeModal = function() {
        document.getElementById("modal").style.display = "none";
    };
});
