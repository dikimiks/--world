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