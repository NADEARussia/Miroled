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
