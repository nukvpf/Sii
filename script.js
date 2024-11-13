// Функция для показа главной страницы и скрытия меню
function showHome() {
    document.getElementById('home').classList.remove('hidden'); // Показываем главную страницу
    document.getElementById('menu').classList.add('hidden');    // Скрываем меню
}

// Функция для показа меню и скрытия главной страницы
function showMenu() {
    document.getElementById('home').classList.add('hidden');    // Скрываем главную страницу
    document.getElementById('menu').classList.remove('hidden'); // Показываем меню
}

