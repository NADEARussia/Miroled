document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = document.createElement("video");
    splashVideo.src = "media/Video/intro.mp4";
    splashVideo.autoplay = true;
    splashVideo.muted = true;
    splashVideo.playsInline = true;
    splashVideo.style.width = "100%";
    splashVideo.style.height = "100%";
    splashVideo.style.objectFit = "cover";
    splashScreen.appendChild(splashVideo);

    // Скрываем заставку после окончания видео
    splashVideo.addEventListener("ended", function () {
        splashScreen.style.transition = "opacity 1s ease-out";
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.style.display = "none";
            document.body.style.overflow = "auto";
        }, 1000);
    });

    // Если видео не загружается, скрываем заставку через 5 секунд
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
