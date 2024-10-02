const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        const questionText = currentQuestion.question + '\n' + currentQuestion.options.join('\n');
        let userAnswer;

        while (true) {
            userAnswer = prompt(questionText);
            
            if (userAnswer === null) {
                alert("Вы вышли из викторины.");
                return;
            }
            
            const answerNumber = parseInt(userAnswer);
            
            if (!isNaN(answerNumber) && answerNumber >= 1 && answerNumber <= currentQuestion.options.length) {
                if (answerNumber === currentQuestion.correctAnswer) {
                    score++;
                }
                break; 
            } else {
                alert("Введите номер ответа"); 
            }
        }
    }

    alert('Вы ответили правильно на ' + score + ' из ' + quiz.length + ' вопросов.');
}
