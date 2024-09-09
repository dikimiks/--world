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