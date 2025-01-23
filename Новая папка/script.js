// Задание 1
// Функция f(x) реализует математическую функцию с разными формулами для различных диапазонов значений x
function f(x) {
    // Если x находится в диапазоне от 0 до 1 включительно
    if (x >= 0 && x <= 1) {
        return (Math.pow(x, 2) - x); // Возвращаем x^2 - x
    } 
    // Если x меньше 0 или больше 1
    else if (x > 1 || x < 0) {
        const pi = Math.PI; // Определяем значение π
        return (Math.pow(x, 2) - Math.sin(pi) * Math.pow(x, 2)); // Вычисляем x^2 - sin(π) * x^2
    }
}

// Получаем ссылку на <tbody> таблицы, куда будут добавляться строки
const tableBody = document.getElementById('functionTable').getElementsByTagName('tbody')[0];

// Генерируем значения x от -20 до 25 с шагом 1 и заполняем таблицу
for (let x = -20; x <= 25; x++) {
    const row = tableBody.insertRow(); // Создаем новую строку
    const cellX = row.insertCell(0); // Создаем ячейку для x
    const cellF = row.insertCell(1); // Создаем ячейку для f(x)
    cellX.textContent = x.toFixed(1); // Заполняем ячейку x значением (с округлением до 1 знака)
    cellF.textContent = f(x).toFixed(0); // Заполняем ячейку f(x) значением (с округлением до целого)
}

// Задание 2
// Функция для генерации случайной координаты в заданном диапазоне
function getRandomCoordinate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного числа между min и max
}

// Создаем массив для хранения точек
const points = [];
for (let i = 0; i < 100; i++) {
    const x = getRandomCoordinate(-25, 25); // Генерируем случайное значение x
    const y = getRandomCoordinate(-25, 25); // Генерируем случайное значение y
    points.push({ x, y }); // Добавляем точку с координатами x и y в массив
}
console.table(points);
// Счетчик точек, попадающих в первую четверть
let countInFirstQuadrant = 0;
points.forEach(point => {
    // Проверяем, находится ли точка в первой четверти (x > 0 и y > 0)
    if (point.x > 0 && point.y > 0) {
        countInFirstQuadrant++; // Увеличиваем счетчик
    }
});

// Выводим результат в элемент с id="output"
document.getElementById('output').innerText = `Количество точек в первой четверти: ${countInFirstQuadrant}`;

// Задание 3
// Функция для отображения масти карты по номеру
function showSuit() {
    const cardNumber = document.getElementById('cardNumber').value; // Получаем введенное пользователем число
    let suitName; 
    
    // Определяем масть в зависимости от введенного числа
    switch (parseInt(cardNumber)) {
        case 1:
            suitName = "Крести"; // Если введено 1
            break;
        case 2:
            suitName = "Бубны"; // Если введено 2
            break;
        case 3:
            suitName = "Черви"; // Если введено 3
            break;
        case 4:
            suitName = "Пики"; // Если введено 4
            break;
        default:
            suitName = "Введите число от 1 до 4"; // Если введено число вне диапазона
            break;
    }

    // Выводим результат в элемент с id="result"
    document.getElementById('result').innerText = suitName;
}
