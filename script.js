document.addEventListener("DOMContentLoaded", function () {
    // Скрытие заставки после окончания видео
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = splashScreen.querySelector("video");

    splashVideo.addEventListener("ended", function () {
        splashScreen.style.transition = "opacity 1s ease-out";
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.style.display = "none";
            document.body.style.overflow = "auto"; // Разрешить прокрутку
        }, 1000);
    });

    // Если видео не может проиграться, скрываем заставку через 5 секунд
    setTimeout(() => {
        if (splashScreen.style.display !== "none") {
            splashScreen.style.transition = "opacity 1s ease-out";
            splashScreen.style.opacity = "0";
            setTimeout(() => {
                splashScreen.style.display = "none";
                document.body.style.overflow = "auto";
            }, 1000);
        }
    }, 5000);

    // Плавная прокрутка к секциям
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
