// const a = {
//     a: "abc",
//     b: 123,
//     c: "xxx",
//     d: 324
// }

// const copyA = a
// copyA.d = 321313131
// console.log(copyA.d)
// console.log(a.d)

// -----------------------------------------------------------------------------------------------

// num = 52854
// console.log((num % 100 - num % 10) / 10);

// const a = {
//     align: "al",
//     back: "bc"
// }

// console.log(a)
// a.front = 45
// a.back = "always"
// console.log(a)

// delete a.back
// a["prop"] = "csdcsd"

// console.log(a)

// -----------------------------------------------------------------------------------------------

// const user = { name: "Liam", role: "admin" };
// console.log(`${user.name} is ${user.role}`)

// const person = {
//     age: 18,
//     name: "vlad",
//     wrapper: {
//         always: true,
//         current: "yes"
//     }
// }

// const person2 = Object.assign({"dfs": "cdscsd"}, person)
// person2.wrapper = {"always": false}

// console.log(person)
// console.log(person2)

// -----------------------------------------------------------------------------------------------

// function xxx(a, b, c) {
//     return a + b ** c
// }

// function yyy(x, y, z) {
//     return x + y * z(1, 2, 3)
// }

// const a = 45
// const b = 12
// console.log(yyy(a, b, xxx))

// username = null;
// console.log(`Привет, ${username ?? "гость"}`);

// const weather = "cold"
// if (weather === "rainy") {
    //     console.log("возьмите зонт")
// } else if (weather === "sunny") {
//     console.log("возьмите очки")
// } else if (weather === "cold") {
//     console.log("одевайтесь теплее")
// } else {
//     console.log("хорошего вам дня")
// }

// function roleAdmin(name) {
//     return console.log(`Привет, ${name}, вам доступны функции администратора.`);
// }

// function roleUser(name) {
//     return console.log(`Здравствуйте, ${name}.`);
// }

// const username = "Павел"
// greetUser(username)

// function greetUser(a) {
//     if (a == 'Павел' || a == 'Олег') {
//         roleAdmin(a);
//     } else {
//         roleUser(a);
//     }
// }

// function startRocketCountdown (initialCount) {
//     if (initialCount > 0) {
//         while (initialCount > 0) {
//             console.log(initialCount)
//             initialCount -= 1
//             if (initialCount === 0) {
//                 console.log(initialCount)
//                 console.log("Старт")
//             }
//         }
//     }
// }

// startRocketCountdown(10)

// -----------------------------------------------------------------------------------------------

// const number = prompt("Введите число: ");
// console.log(number > 0 ? "Положительное" : "Отрицательное");

// -----------------------------------------------------------------------------------------------

// const stroka = prompt("Введите строку:");
// console.log(`Длина строки составляет: ${alert(stroka[stroka.length -1])}`);

// -----------------------------------------------------------------------------------------------

// const number = prompt("Введите число: ");
// number % 2 === 0 ? alert("Четное") : alert("Нечетное число");

// -----------------------------------------------------------------------------------------------

// const input = prompt("Введите два слова через пробел:");
// const wordsArray = input.split(' ');
// console.log(wordsArray[0][0].toLocaleLowerCase() === wordsArray[1][0].toLowerCase() ? "Совпадают" : "Не совпадают")

// -----------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.companies-sponsors-logos-container');
    
    // Очищаем контейнер на всякий случай
    container.innerHTML = '';

    // Массив с логотипами и их ссылками
    const logos = [
        { src: './icons/mastercard.svg', url: 'https://mastercard.com', name: 'Mastercard' },
        { src: './icons/airbnb.svg', url: 'https://airbnb.com', name: 'Airbnb' },
        { src: './icons/uber.svg', url: 'https://uber.com', name: 'Uber' },
        { src: './icons/paypal.svg', url: 'https://paypal.com', name: 'PayPal' },
        { src: './icons/visa.svg', url: 'https://visa.com', name: 'Visa' },
        { src: './icons/stripe.svg', url: 'https://stripe.com', name: 'Stripe' }
    ];

    // Создаем трек
    const track = document.createElement('div');
    track.className = 'companies-sponsors-logos-track';

    // Функция для создания логотипов
    function createLogoItems(logosArray) {
        logosArray.forEach(logo => {
            // Создаем ссылку с href
            const link = document.createElement('a');
            link.className = 'companies-sponsors-link';
            link.href = logo.url; // ← Добавляем ссылку
            link.target = '_blank'; // Открывать в новой вкладке
            link.rel = 'noopener noreferrer'; // Безопасность
            link.title = `Перейти на сайт ${logo.name}`; // Подсказка
            
            // Создаем изображение
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.name;
            
            // Собираем все вместе
            link.appendChild(img);
            track.appendChild(link);
        });
    }

    // Добавляем оригинальные логотипы
    createLogoItems(logos);

    // Добавляем дубликаты для бесконечного эффекта
    createLogoItems(logos);

    container.appendChild(track);
});

let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        525: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 15,
        },
    },
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.swiper-card-button-heart');
    
    // Функция сохранения
    function saveCardState(card, isActive) {
        const cardIndex = Array.from(document.querySelectorAll('.swiper-card-button-heart')).indexOf(card);
        let savedStates = JSON.parse(localStorage.getItem('cardStates') || '[]');
        savedStates[cardIndex] = isActive;
        localStorage.setItem('cardStates', JSON.stringify(savedStates));
    }
    
    // Загрузка при старте
    const savedStates = JSON.parse(localStorage.getItem('cardStates') || '[]');
    document.querySelectorAll('.swiper-card-button-heart').forEach((card, index) => {
        if (savedStates[index]) {
        card.classList.add('is-active-heart');
        }
    });
    
    // Обработка кликов
    buttons.forEach(button => {
        button.addEventListener('click', function() {
        const card = this.closest('.swiper-card-button-heart');
        card.classList.toggle('is-active-heart');
        
        const cardIndex = Array.from(document.querySelectorAll('.swiper-card-button-heart')).indexOf(card);
        saveCardState(card, card.classList.contains('is-active-heart'));
        });
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    // ===== ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Объект с путями к картинкам для каждой кнопки в каждой вкладке
    const images = {
        tab1: [
            './images/living-room1.jpg',
            './images/kitchen1.jpg',
            './images/dining-room1.jpg',
            './images/goida.jpg',
            './images/photo.jpg',
            './images/police.jpg'
        ],
        tab2: [
            './images/goida.jpg',
            './images/photo.jpg',
            './images/police.jpg',
            './images/living-room1.jpg',
            './images/osel.jpg',
            './images/dining-room1.jpg'
        ],
        tab3: [
            './images/goida.jpg',
            './images/photo.jpg',
            './images/police.jpg',
            './images/living-room1.jpg',
            './images/police.jpg',
            './images/perekur.jpg'
        ]
    };
    
    // Функция переключения вкладок
    function switchTab(tabId) {
        // Убираем активный класс у всех кнопок вкладок
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Добавляем активный класс текущей кнопке вкладки
        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
        
        // Скрываем все контенты
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Показываем нужный контент
        const activeContent = document.getElementById(`tab-${tabId}`);
        activeContent.classList.add('active');
    }
    
    // Добавляем обработчики на кнопки вкладок
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            switchTab(tabId);
        });
    });
    
    // ===== УСТАНОВКА НАЧАЛЬНОГО СОСТОЯНИЯ ДЛЯ КАЖДОЙ ВКЛАДКИ =====
    function setDefaultStateForTab(tabContent) {
        const buttons = tabContent.querySelectorAll('.all-fugniture-content-button');
        const image = tabContent.querySelector('img');
        const tabId = tabContent.id;
        const tabNumber = tabId.split('-')[1];
        const imageKey = `tab${tabNumber}`;
        
        // Убираем активный класс у всех кнопок в этой вкладке
        buttons.forEach(btn => {
            btn.classList.remove('active-button');
        });
        
        // Добавляем активный класс первой кнопке (Living Room)
        if (buttons.length > 0) {
            buttons[0].classList.add('active-button');
        }
        
        // Устанавливаем картинку Living Room
        if (image && images[imageKey] && images[imageKey][0]) {
            image.src = images[imageKey][0];
        }
    }
    
    // Применяем начальное состояние ко всем вкладкам
    tabContents.forEach(tabContent => {
        setDefaultStateForTab(tabContent);
    });
    
    // ===== ЛОГИКА СМЕНЫ КАРТИНОК ПРИ КЛИКЕ НА КНОПКИ =====
    
    // Находим все кнопки внутри контента
    const contentButtons = document.querySelectorAll('.all-fugniture-content-button');
    
    // Добавляем обработчик на каждую кнопку
    contentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Находим активную вкладку
            const activeTab = document.querySelector('.tab-content.active');
            const activeTabId = activeTab.id;
            
            // Определяем номер активной вкладки
            const tabNumber = activeTabId.split('-')[1];
            
            // Находим картинку в активной вкладке
            const activeImage = activeTab.querySelector('img');
            
            // Находим все кнопки в активной вкладке
            const buttonsInActiveTab = activeTab.querySelectorAll('.all-fugniture-content-button');
            
            // Находим индекс кликнутой кнопки
            let buttonIndex = -1;
            buttonsInActiveTab.forEach((btn, idx) => {
                if (btn === this) {
                    buttonIndex = idx;
                }
            });
            
            // Меняем картинку
            if (buttonIndex !== -1) {
                const imageKey = `tab${tabNumber}`;
                activeImage.src = images[imageKey][buttonIndex];
                
                // Плавная смена
                activeImage.style.opacity = '0';
                setTimeout(() => {
                    activeImage.style.opacity = '1';
                }, 150);
            }
            
            // Подсвечиваем активную кнопку
            buttonsInActiveTab.forEach(btn => {
                btn.classList.remove('active-button');
            });
            this.classList.add('active-button');
        });
    });
    
    // Добавляем стили для активной кнопки
    const style = document.createElement('style');
    style.textContent = `
        .all-fugniture-content-button.active-button {
            background-color: #154444;
        }
        .all-fugniture-content-button.active-button svg path {
            fill: white;
        }
        .all-fugniture-content-button.active-button span {
            color: white;
        }
        .tab-content img {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});