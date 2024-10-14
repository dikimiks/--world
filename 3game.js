document.getElementById('playButton').onclick = function() {
    const userInput = prompt('Введите текст, который будет перевернут:'); 
    if (userInput !== null) { 
        const reversedInput = userInput.split('').reverse().join(''); 
        alert('Перевернутый текст: ' + reversedInput); 
    }
}