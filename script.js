document.addEventListener("DOMContentLoaded", function () {
    // Скрытие заставки после воспроизведения видео
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = splashScreen.querySelector("video");

    splashVideo.addEventListener("ended", function () {
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.style.display = "none";
        }, 1000);
    });

    // Прокрутка к секциям при нажатии на меню
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Фильтрация зеркал по категориям
    document.getElementById("shape-filter")?.addEventListener("change", function () {
        const selectedShape = this.value;
        document.querySelectorAll(".mirror-card").forEach(card => {
            if (selectedShape === "all" || card.dataset.shape === selectedShape) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
