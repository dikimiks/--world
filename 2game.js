document.getElementById('startSecondGameButton').addEventListener('click', startArithmeticGame);

function startArithmeticGame() {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    const tasks = [];
    for (let i = 0; i < 10; i++) { 
        const randomNum1 = Math.floor(Math.random() * 10) + 1; 
        const randomNum2 = Math.floor(Math.random() * 10) + 1; 
        const randomOperation = Object.keys(operations)[Math.floor(Math.random() * Object.keys(operations).length)];

        tasks.push({ num1: randomNum1, num2: randomNum2, operation: randomOperation });
    }

    for (const task of tasks) {
        let question = `${task.num1} ${task.operation} ${task.num2}`;
        let correctAnswer = operations[task.operation](task.num1, task.num2);

        let userAnswer;
        let isAnswerCorrect = false;

        while (!isAnswerCorrect) {
            userAnswer = prompt(`Решите задачу: ${question}`);

            if (userAnswer === null) { 
                alert('Игра завершена.');
                return; 
            }

            if (isNaN(userAnswer) || userAnswer.trim() === '') {
                alert('Только ввод чисел!'); 
                continue; 
            }

            if (parseFloat(userAnswer) === correctAnswer) {
                alert('Верный ответ!');
                isAnswerCorrect = true; 
            } else {
                alert(`Ошибка. Попробуйте снова.`);
            }
        }
    }
}