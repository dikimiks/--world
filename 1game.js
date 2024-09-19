// Функция для генерации случайного числа от 1 до 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Функция для запроса числа у пользователя
function getUserGuess() {
    let guess = parseInt(prompt("Введите ваше предположение (от 1 до 100):"), 10);
    return isNaN(guess) ? null : guess; // Возвращаем null, если ввод некорректен
}

// Функция для проверки предположения и вывода подсказки
function checkGuess(userGuess, randomNumber) {
    if (userGuess < 1 || userGuess > 100) {
        alert("Пожалуйста, вводите число в диапазоне от 1 до 100.");
    } else if (userGuess < randomNumber) {
        alert("Слишком мало! Попробуйте снова.");
    } else if (userGuess > randomNumber) {
        alert("Слишком много! Попробуйте снова.");
    } else {
        alert("Поздравляем! Вы угадали число " + randomNumber + "!");
        return true; // Возвращаем true, если угадали число
    }
    return false; // Возвращаем false, если не угадали
}

// Основная функция игры
function playGame() {
    const randomNumber = generateRandomNumber();
    let userGuess = null;

    alert("Добро пожаловать в игру 'Угадай число'! Загадай число от 1 до 100.");

    while (userGuess !== randomNumber) {
        userGuess = getUserGuess();

        // Если пользователь ввел некорректное значение, пропускаем цикл
        if (userGuess === null) {
            alert("Пожалуйста, введите корректное число!");
            continue;
        }

        // Проверяем предположение пользователя
        const guessedCorrectly = checkGuess(userGuess, randomNumber);
        if (guessedCorrectly) {
            break; // Выход из цикла, если число угадано
        }
    }
}

// Получаем кнопку и добавляем обработчик события
const startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", playGame);

