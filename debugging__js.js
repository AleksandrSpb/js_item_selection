/*Мы написали функцию, которая вычисляет сумму чётных чисел. Она принимает на вход массив чисел,
в цикле проверяет каждое из чисел на чётность и складывает те, что проходят проверку.
Но функция не работает — в ней есть ошибки.
Выведите в консоль значение numbers в самом начале тела функции.*/

/*function evenSum(numbers) {
    console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {

        const number = numbers[i];

        if(number % 2 === 1) {
            sum += number;
        }
    }

    return sum;
}

// Правильный результат: 2 + 4 = 6
console.log(evenSum([1, 2, 3, 4]));

// Правильный результат: 2 + 10 + 16 = 28
console.log(evenSum([5, 2, 10, 1, 99, 16]));*/

/*В консоли оказались правильные массивы [1,
    2, 3, 4][5, 2, 10, 1, 99, 16]. Значит, ошибка
    в другом месте, идём дальше.*/
/*Теперь перенесите вызов console.log внутрь цикла, чтобы выводить значение переменной number каждую итерацию цикла.*/

/*function evenSum(numbers) {
    console.log(numbers); // Тут нет ошибки
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if(number % 2 === 1) {
            sum += number;
            console.log(number);
        }
    }

    return sum;
}

// Правильный результат: 2 + 4 = 6
console.log(evenSum([1, 2, 3, 4]));

// Правильный результат: 2 + 10 + 16 = 28
console.log(evenSum([5, 2, 10, 1, 99, 16]));*/


/*В консоль выводятся все элементы массива: значит цикл написан правильно. Продолжаем искать ошибку...*/

/*Теперь перенесите вызов console.log внутрь условной конструкции if.
Выведите значения переменной number, которые проходят проверку на чётность.*/
/*function evenSum(numbers) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        console.log(number); // Тут нет ошибки

        if(number % 2 === 1) {
            sum += number;
            console.log(number);
        }
    }

    return sum;
}

// Правильный результат: 2 + 4 = 6
console.log(evenSum([1, 2, 3, 4]));

// Правильный результат: 2 + 10 + 16 = 28
console.log(evenSum([5, 2, 10, 1, 99, 16]));*/
/*
В консоль выводятся нечётные элементы вместо чётных! Ошибка где-то здесь!*/


/*Проблема в условной конструкции. Почините её.
    function evenSum(numbers) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if(number % 2 === 0) {
            console.log(number); // Ошибка где-то здесь!
            sum += number;
        }
    }

    return sum;
}

// Правильный результат: 2 + 4 = 6
console.log(evenSum([1, 2, 3, 4]));

// Правильный результат: 2 + 10 + 16 = 28
console.log(evenSum([5, 2, 10, 1, 99, 16]));*/
