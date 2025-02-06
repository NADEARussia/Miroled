<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiroLED - Галерея зеркал</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <h1>MiroLED</h1>
        <nav>
            <ul>
                <li><a href="#home" data-lang="home">Главная</a></li>
                <li><a href="#gallery" data-lang="gallery">Галерея работ</a></li>
                <li><a href="#about" data-lang="about">О нас</a></li>
                <li><a href="#contact" data-lang="contact">Контакты</a></li>
                <li>
                    <select id="language-select">
                        <option value="ru">Рус</option>
                        <option value="ro">Rom</option>
                        <option value="en">Eng</option>
                    </select>
                </li>
            </ul>
        </nav>
    </header>
    
    <section id="gallery">
        <h2 data-lang="gallery">Галерея работ</h2>
        <div class="gallery-container">
            <div class="gallery-item" onclick="openModal('media/mirrors/mirror1.jpg', 'Описание зеркала 1')">
                <img src="media/mirrors/mirror1.jpg" alt="Зеркало 1">
            </div>
            <div class="gallery-item" onclick="openModal('media/mirrors/mirror2.jpg', 'Описание зеркала 2')">
                <img src="media/mirrors/mirror2.jpg" alt="Зеркало 2">
            </div>
            <div class="gallery-item" onclick="openModal('media/work_gallery/work1.jpg', 'Описание работы 1')">
                <img src="media/work_gallery/work1.jpg" alt="Фото работы 1">
            </div>
        </div>
    </section>
    
    <div id="modal" class="modal">
        <span class="close" onclick="closeModal()">&times;</span>
        <img id="modal-img">
        <p id="modal-desc"></p>
    </div>
</body>
</html>
