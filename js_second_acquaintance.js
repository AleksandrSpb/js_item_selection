/*
var array = [];

for (var i = 0; i <= 10; i += 1) {
    array[i] = i;
}

Измените код так, чтобы не оставить другим разработчикам шанса критиковать вас за var:
var array = [];

for (var i = 0; i <= 10; i += 1) {
    array[i] = i;
} */
/*const array = [];

for (let i = 0; i <= 10; i += 1) {
    array[i] = i;
}*/

/*Используйте метод indexOf, чтобы найти иголку в стоге сена. Найдите строку иголка в строке, которая хранится в переменной haystack:
    const haystack = 'встогесенаиголкагдето';
Выведите в консоли индекс, с которого начинается искомая строка.*/
/*const haystack = 'встогесенаиголкагдето';
console.log(haystack.indexOf("и"));*/

/*Используя метод includes, дайте нашему редактору ещё пару поводов для тяжёлого вздоха.*/

/*
let message = 'мне нравиться экспрессо';

if (message.includes("ться")/!* проверьте есть ли в строке "ться" *!/) {
    console.log('тяжело вздыхает');
}

if (message.includes("экс")/!* проверьте есть ли в строке "экс" *!/) {
    console.log('цокает языком');
}*/

/* Функция prompt показывает диалоговое
окно с возможностью ввести текст. Введённая строка
попадёт в переменную myName */
/*Допишите код, чтобы в консоль выводилось имя с заглавной буквы,
— независимо от того, как его ввёл пользователь. Используйте методы toUpperCase и slice.*/

/*const myName = prompt('Как Вас зовут?', '');

console.log('Здравствуйте, ' + myName[0].toUpperCase() + myName.slice(1));*/
/*Вызовите метод split, чтобы составить массив слов из строки:
    const blokPoem = 'Ночь. Улица. Фонарь. Аптека';
const blokArray = /!* код впишите сюда *!/

    console.log(blokArray); // ["Ночь", "Улица", "Фонарь", "Аптека"] */


/*const blokPoem = 'Ночь. Улица. Фонарь. Аптека';
const blokArray = blokPoem.split(". ")
console.log(blokArray); // ["Ночь", "Улица", "Фонарь", "Аптека"]*/

/*Вызовом функции parseInt посчитайте суммарное количество героев сказаний 33 богатыря, 24 рыцаря Круглого стола и 300 спартанцев:
    const bogatyrs = '33 богатыря';
const knights = '24 рыцаря Круглого стола';
const spartans = '300 спартанцев';
const totalHeroes = /!* сюда впишите код *!/

    console.log(totalHeroes);

const bogatyrs = '33 богатыря';
const knights = '24 рыцаря Круглого стола';
const spartans = '300 спартанцев';
const totalHeroes = parseInt(bogatyrs)+parseInt(knights)+parseInt(spartans);

    console.log(totalHeroes);*/


/*Неявным приведением измените выражение внутри круглых скобок console.log так, чтобы в консоль вывелась строка "100500".

const hundred = 100;
const fiveHundred = 500;

console.log("" + hundred + fiveHundred);*/

/*Функция Boolean преобразовывает любые значения в логические: true или false. Раскомментируйте только те строчки программы, которые напечатают в консоли true.*/

/*    //console.log(Boolean());
    //console.log(Boolean(undefined));
    //console.log(Boolean(null));
    //console.log(Boolean(0));
    console.log(Boolean('0'));
console.log(Boolean(true));
//console.log(Boolean(false));
console.log(Boolean('true'));
console.log(Boolean('false'));*/

/*В круглых скобках if напишите такое условие, чтобы конструкция if переспросила пароль, если пользователь ничего не ввёл или нажал «Отмена».
Используйте оператор логическое НЕ.*/

/*let password = prompt('Введите пароль:');

if (!password) {
    password = prompt('Пароль обязателен и не может быть пустым.');
}*/
/*
Логический оператор !, поставленный перед не булевым значением, приводит его к логическому типу и меняет на противоположное. Пустая строка в логическом контексте — false, а !'' — true:
!''; // true
!null; // true
Таким образом, достаточно использовать оператор ! к переменной password.*/

/*let password = prompt('Введите пароль:');

if (!password) {
    password = prompt('Пароль обязателен и не может быть пустым.');
}*/

/*Сделайте так, чтобы из опций Быть или Не быть оператор логическое ИЛИ вернул строку "Быть":
const answer = /!* напишите ваш код здесь *!/

    console.log(answer); // "Быть" */

/*const answer = ("Быть" || "Не быть"); /!* напишите ваш код здесь *!/

console.log(answer); // "Быть"*/

/*const t = prompt('Какая у вас температура?');
const normal = (t>= 35.9) && (t <= 37.2);

console.log(normal);

Нормальная температура тела — от 35.9 до 37.2 °С. Напишите такое выражение с оператором логическое И, чтобы в переменной normal сохранялось значение true,
если значение переменной t лежит в этом диапазоне температур.*/

/* Функция принимает 2 аргумента: систолическое
и диастолическое давление (верхнее и нижнее) */

/*function getNormal(sys, dia) {
    return sys>100&&sys<135&&dia>60&&dia<85;
}

console.log(getNormal(110, 70)); // true
console.log(getNormal(140, 75)); // false
console.log(getNormal(98, 80)); // false*/

/*Нормальное артериальное давление: верхнее 100–135 мм рт. ст., нижнее 60–85 мм рт. ст. Оба условия должны выполняться.
    Допишите условие в функции getNormal(sys, dia), чтобы она возвращала true, если давление в пределах нормы, и false — если нет:
    /!* Функция принимает 2 аргумента:
    систолическое и диастолическое давление
    (верхнее и нижнее) *!/

    function getNormal(sys, dia) {
        return /!* напишите условие тут *!/
    }

console.log(getNormal(110, 70)); // true
console.log(getNormal(140, 75)); // false
console.log(getNormal(98, 80)); // false */

/*
const animalOrder = 'китообразное';
const animalClass = 'млекопитающее';
const hasEmpathy = true;

if (animalOrder === 'китообразное'&&animalClass === 'млекопитающее'&&hasEmpathy)  {
            console.log('Это же дельфин!');
        }
Используя логические операторы, избавьтесь от вложенных конструкций if.*/

const where = prompt('Куда едешь? Налево, направо или прямо?', '').toLowerCase();

switch (where) {
    case 'налево':
        console.log('Быть тебе женатым')
        break;
}
switch (where) {
    case 'прямо':
        console.log('Живым не бывать')
        break;
}
switch (where) {
    case 'направо':
        console.log('Быть тебе богатым')
        break;
}
/*console.log('Быть тебе женатым'); // если ответ "налево",
console.log('Живым не бывать'); // если "прямо",
console.log('Быть тебе богатым'); // если "направо".*/
