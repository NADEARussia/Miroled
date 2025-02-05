document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            title: "Welcome to MiroLED",
            subtitle: "Mirrors with lighting and innovative design",
            gallery: "Gallery of works",
            contact: "Contact us",
            address: "Address: Meșterul Manole 20, Chișinău, Moldova",
            send: "Send",
            name: "Your name",
            email: "Your email",
            message: "Your message"
        },
        ru: {
            title: "Добро пожаловать в MiroLED",
            subtitle: "Зеркала с подсветкой и инновационным дизайном",
            gallery: "Галерея работ",
            contact: "Свяжитесь с нами",
            address: "Адрес: ул. Мештер Маноле 20, Кишинёв, Молдова",
            send: "Отправить",
            name: "Ваше имя",
            email: "Ваш email",
            message: "Ваше сообщение"
        },
        ro: {
            title: "Bine ați venit la MiroLED",
            subtitle: "Oglinzi cu iluminare și design inovator",
            gallery: "Galeria lucrărilor",
            contact: "Contactați-ne",
            address: "Adresa: Meșterul Manole 20, Chișinău, Moldova",
            send: "Trimite",
            name: "Numele dvs.",
            email: "Email-ul dvs.",
            message: "Mesajul dvs."
        }
    };

    function changeLanguage(lang) {
        document.querySelector("[data-lang='title']").textContent = translations[lang].title;
        document.querySelector("[data-lang='subtitle']").textContent = translations[lang].subtitle;
        document.querySelector("[data-lang='gallery']").textContent = translations[lang].gallery;
        document.querySelector("[data-lang='contact']").textContent = translations[lang].contact;
        document.querySelector("[data-lang='address']").textContent = translations[lang].address;
        document.querySelector("[data-lang='send']").textContent = translations[lang].send;

        document.querySelector("[name='name']").setAttribute("placeholder", translations[lang].name);
        document.querySelector("[name='email']").setAttribute("placeholder", translations[lang].email);
        document.querySelector("[name='message']").setAttribute("placeholder", translations[lang].message);
    }

    window.changeLanguage = changeLanguage;
});
