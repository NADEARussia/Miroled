document.addEventListener("DOMContentLoaded", function () {
    const elementsToFade = document.querySelectorAll(".fade-in");
    const elementsToSlide = document.querySelectorAll(".slide-up");
    const languageSelect = document.getElementById("language-select");
    const translations = {
        "ru": {
            "home": "Главная",
            "catalog": "Каталог",
            "about": "О нас",
            "portfolio": "Портфолио",
            "contact": "Контакты",
            "welcome": "Добро пожаловать в MiroLED",
            "description": "Создаем стильные зеркала с подсветкой для вашего интерьера."
        },
        "ro": {
            "home": "Acasă",
            "catalog": "Catalog",
            "about": "Despre noi",
            "portfolio": "Portofoliu",
            "contact": "Contacte",
            "welcome": "Bine ați venit la MiroLED",
            "description": "Creăm oglinzi moderne și elegante cu iluminare."
        },
        "en": {
            "home": "Home",
            "catalog": "Catalog",
            "about": "About Us",
            "portfolio": "Portfolio",
            "contact": "Contacts",
            "welcome": "Welcome to MiroLED",
            "description": "We create stylish and modern mirrors with lighting."
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[lang][el.getAttribute("data-lang")];
        });
    }

    languageSelect.addEventListener("change", function () {
        updateLanguage(this.value);
    });

    updateLanguage(languageSelect.value);

    function animateElements() {
        elementsToFade.forEach(el => {
            el.style.opacity = "1";
        });
        elementsToSlide.forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }

    animateElements();

    const lazyImages = document.querySelectorAll(".lazy-load");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });

    window.calculatePrice = function(id) {
        let size = document.getElementById(`size${id}`).value;
        let price = size * 10; // Примерная цена за см
        document.getElementById(`price${id}`).textContent = `Цена: ${price} MDL`;
    };

    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/37368939303";
    whatsappButton.classList.add("whatsapp-button");
    whatsappButton.textContent = "💬 WhatsApp";
    document.body.appendChild(whatsappButton);
});
