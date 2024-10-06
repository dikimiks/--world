function playFiveGame() {
    const options = ["камень", "ножницы", "бумага"];
    
    let userChoice = prompt("Введите ваш выбор (камень, ножницы или бумага):").toLowerCase();
    
    while (!options.includes(userChoice)) {
        alert("Неверный выбор. Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
        userChoice = prompt("Введите ваш выбор (камень, ножницы или бумага):").toLowerCase();
    }

    const computerChoice = options[Math.floor(Math.random() * options.length)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}
