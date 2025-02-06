document.addEventListener("DOMContentLoaded", function () {
    // Переключение языка
    const languageSelect = document.getElementById("language-select");
    languageSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[selectedLang][el.getAttribute("data-lang")];
        });
    });

    // Объект переводов
    const translations = {
        ru: {
            home: "Главная",
            gallery: "Галерея работ",
            about: "О нас",
            contact: "Контакты",
            welcome: "Добро пожаловать в MiroLED",
            description: "Мы создаем стильные и современные зеркала с подсветкой.",
            about_description: "Мы разрабатываем зеркала с подсветкой, дополняющие интерьер."
        },
        ro: {
            home: "Acasă",
            gallery: "Galerie de lucrări",
            about: "Despre noi",
            contact: "Contacte",
            welcome: "Bine ați venit la MiroLED",
            description: "Creăm oglinzi moderne și elegante cu iluminare.",
            about_description: "Dezvoltăm oglinzi cu iluminare care completează interiorul."
        },
        en: {
            home: "Home",
            gallery: "Gallery",
            about: "About Us",
            contact: "Contact",
            welcome: "Welcome to MiroLED",
            description: "We create stylish and modern mirrors with lighting.",
            about_description: "We develop illuminated mirrors that complement the interior."
        }
    };

    // Открытие модального окна
    window.openModal = function(imageSrc, description) {
        const modal = document.getElementById("modal");
        document.getElementById("modal-img").src = imageSrc;
        document.getElementById("modal-desc").textContent = description;
        modal.style.display = "block";
    };

    // Закрытие модального окна
    window.closeModal = function() {
        document.getElementById("modal").style.display = "none";
    };
});
