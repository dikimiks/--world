function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getUserGuess() {
    let guess = parseInt(prompt("Введите ваше предположение (от 1 до 100):"), 10);
    return isNaN(guess) ? null : guess; 
}

function checkGuess(userGuess, randomNumber) {
    if (userGuess < 1 || userGuess > 100) {
        alert("Пожалуйста, вводите число в диапазоне от 1 до 100.");
    } else if (userGuess < randomNumber) {
        alert("Слишком мало! Попробуйте снова.");
    } else if (userGuess > randomNumber) {
        alert("Слишком много! Попробуйте снова.");
    } else {
        alert("Поздравляем! Вы угадали число " + randomNumber + "!");
        return true; 
    }
    return false; 
}

function playGame() {
    const randomNumber = generateRandomNumber();
    let userGuess = null;

    alert("Добро пожаловать в игру 'Угадай число'! Загадай число от 1 до 100.");

    while (userGuess !== randomNumber) {
        userGuess = getUserGuess();

        if (userGuess === null) {
            alert("Пожалуйста, введите корректное число!");
            continue;
        }

        const guessedCorrectly = checkGuess(userGuess, randomNumber);
        if (guessedCorrectly) {
            break; 
        }
    }
}

const startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", playGame);

