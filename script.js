
let password = 'верный пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

let c;

let testValues = [0, 10, -3, 2];

testValues.forEach(value => {
    c = value; 
    if (c > 0 && c < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
});

let d = 150;
let e = 50;

if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b)); 

let monthsNumber = 13; 
if (monthsNumber < 1 || monthsNumber > 12) {
    console.log('Некорректный номер месяца');
} else {
    switch (monthsNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    
        default:
            console.log('Неккоректный номер месяца');
    }
}


for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

let n = 1000; 
let num = 0;  
while (n >= 50) {
    n = n / 2; 
    num++;      
}
console.log("Полученное число:", n);
console.log("Количество итераций:", num);

let firstFriday = 3; 
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

const getSmallerNumber = (num1, num2) => (num1 < num2 ? num1 : num2);

console.log(getSmallerNumber(8, 4)); 

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(checkEvenOdd(4));

function printSquare(number) {
    const square = number * number; 
    console.log(square); 
}

function getSquare(number) {
    return number * number; 
}

printSquare(7); 

const result = getSquare(6); 
console.log(result);

function greetUser() {
    let age;

    while (true) {
        age = prompt("Сколько вам лет?");

        age = Number(age);

        if (isNaN(age) || age < 0) {
            alert('Вы ввели неправильное значение. Повторите попытку!');
        } else {
            break;
        }
    }

    if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else { 
        alert('Добро пожаловать!');
    }
}
greetUser();

function checkAndCube() {
    while (true) {
        let input = prompt("Введите число:");

        if (input === null) {
            alert('Вы вышли из программы.');
            break; 
        }

        let number = Number(input);
        if (isNaN(number)) {
            alert('Переданный параметр не является числом');
        } else {
            let cube = Math.pow(number, 3);
            alert(`${number} в кубе равняется ${cube}`);
            break; 
        }
    }
}
checkAndCube();

const circle1 = {
    radius: 5,
    
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("Circle 1:");
console.log("Radius:", circle1.radius);
console.log("Area:", circle1.getArea());
console.log("Perimeter:", circle1.getPerimeter());

console.log("Circle 2:");
console.log("Radius:", circle2.radius);
console.log("Area:", circle2.getArea());
console.log("Perimeter:", circle2.getPerimeter());


//hw6

//1

const array = [1, 5, 4, 10, 0, 3];
const reslt = array.find(num => num === 10);

if (reslt !== undefined) {
    console.log(reslt);
}

//2

const arr = [1, 5, 4, 10, 0, 3];
const targetValue = 4;
let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
        index = i;
        break;
    }
}
console.log(index);

//3

const numbs = [1, 3, 5, 10, 20];
const output = numbs.join(' ');
console.log(output);

//4

const totalRows = 3; 
const totalCols = 3; 

const array2 = []; 

for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    const newRow = []; 
    for (let colIndex = 0; colIndex < totalCols; colIndex++) {
        newRow.push(1); 
    }
    array2.push(newRow); 
}


console.log(array2);

//5

let numb = [1, 1, 1];
numb.push(2, 2, 2);
console.log(numb);

//6

let numArray = [9, 8, 7, 'a', 6, 5];

numArray = numArray.filter(item => typeof item === 'number');
numArray.sort((a, b) => a - b);

console.log(numArray);

//7

let numberList = [9, 8, 7, 6, 5];
let userGuess = prompt("Угадайте число из массива: [9, 8, 7, 6, 5]");

if (numberList.includes(Number(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}



//8


let initialString = 'abcdef';
let reversedArray = initialString.split('');
reversedArray.reverse();
let reversedString = reversedArray.join('');

console.log(reversedString);

//9

let nestedArray = [[1, 2, 3], [4, 5, 6]];
let flatArray = [...nestedArray[0], ...nestedArray[1]];

console.log(flatArray);

//10
const randomNumbers = [1, 3, 5, 7, 2, 9, 4, 6, 8, 10];

for (let i = 0; i < randomNumbers.length - 1; i++) {
    console.log(randomNumbers[i] + randomNumbers[i + 1]);
}

//11
function getSquares(integersArray) {
    const squaresArray = integersArray.map(function(number) {
        return number * number; 
    });
    
    return squaresArray; 
}

const numbers = [1, 2, 3, 4, 5]; 
const squares = getSquares(numbers); 

console.log(squares); 

//12

function getStringLengths(stringsArray) {
    const lengthsArray = stringsArray.map(function(currentString) {
        return currentString.length; 
    });

    return lengthsArray; 
}

const cities = ["Москва", "Сочи", "Екатеринбург", "Пермь"]; 
const lengths = getStringLengths(cities);

console.log(lengths);

//13

function filterNegativeValues(arr) {
    return arr.filter(function(num) {
        return num < 0;
    });
}

const integerArray = [10, -2, 5, -4, 0, -1, 3]; 
const negativeValues = filterNegativeValues(integerArray); 

console.log(negativeValues);

//14

const initialArray = [];
for (let index = 0; index < 10; index++) {
    initialArray.push(Math.floor(Math.random() * 11)); 
}

const filteredEvens = initialArray.filter(number => number % 2 === 0);

console.log("Исходный массив:", initialArray);
console.log("Четные значения:", filteredEvens);

//15

const numbersArray = [];
for (let count = 0; count < 6; count++) {
    numbersArray.push(Math.floor(Math.random() * 10) + 1); 
}

const sum = numbersArray.reduce((accumulator, current) => accumulator + current, 0);
const average = sum / numbersArray.length;

console.log("Массив чисел:", numbersArray);
console.log("Среднее арифметическое:", average);

//hw7

//1

let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

//2

function filterStringsByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    
    const result = arr.filter(str => str.toLowerCase().startsWith(lowerPrefix));
    
    return result;
}

//3
let number = 32.58884;

let roundedDown = Math.floor(number); 
let roundedUp = Math.ceil(number);    
let roundedNearest = Math.round(number); 

//4

let numbers = [52, 53, 49, 77, 21, 32];

let minValue = Math.min(...numbers); 
let maxValue = Math.max(...numbers); 

console.log("Минимальное значение:", minValue); 
console.log("Максимальное значение:", maxValue); 

//5

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1; 
    console.log(randomNumber); 
}

//6
function generateRandomArray(n) {
    if (!Number.isInteger(n) || n <= 0) {
        return "Введите положительное целое число.";
    }

    let length = Math.floor(n / 2);
    let randomNumbers = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * n); 
        randomNumbers.push(randomNumber); 
    }

    return randomNumbers; 
}

console.log(generateRandomArray(10)); 


//7
function getRandomNumberBetween(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "Оба значения должны быть целыми числами.";
    }
    
    if (min > max) {
        return "Минимальное значение должно быть меньше или равно максимальному значению.";
    }
    
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber; 
}

console.log(getRandomNumberBetween(2, 29));

//8

let currentDate = new Date();
console.log(currentDate);

//9

let currentDate = new Date();
console.log("Текущая дата:", currentDate);

let currentDay = currentDate.getDate();
currentDate.setDate(currentDay + 73);

console.log("Дата через 73 дня:", currentDate);

//10

function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня", 
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    
    const weekdays = [
        "воскресенье", "понедельник", "вторник", "среда", 
        "четверг", "пятница", "суббота"
    ];
    
    const day = date.getDate(); 
    const month = months[date.getMonth()]; 
    const year = date.getFullYear(); 
    const weekday = weekdays[date.getDay()]; 

    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0'); 

    return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

const myDate = new Date(); 
console.log(formatDate(myDate));
