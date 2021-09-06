/*В этой теме вы реализуете возможность добавлять треки в плейлист и очищать его. В следующей — добавите возможность ставить песням лайк.
    Вёрстка и стили уже готовы, JavaScript-код предстоит писать вам. Разработчикам часто приходится дорабатывать чужой код. Как раз потренируетесь.
    Все элементы, с которыми необходимо работать, лежат внутри элемента с классом container. В файле script.js выберите этот элемент и сохраните его в новой переменной container.*/
let container = document.querySelector('.container');
/*Из общего контейнера нам нужен тот, в который мы будем добавлять песни.
 Выберите элемент с классом songs-container и сохраните его в переменной songsContainer.
Внимание: контейнер стоит выбирать не из всего документа, а из переменной container.*/
let songsContainer = container.querySelector('.songs-container');
/*Каждая песня в плейлисте — элемент с классом song. Вызовом метода querySelectorAll выберите все треки и запишите их в
переменную songs. Сейчас в неё будет записан пустой массив: ведь в плейлисте пока нет ни одной песни.*/
let songs = songsContainer.querySelectorAll('.song');
/*Вы только что получили список всех песен в плейлисте.
Пока этот список пустой, но скоро...*/

/*Неотъемлемые элементы интерактивности — кнопки. Выберем их, чтобы позже «повесить» события: то есть назначить, что будет происходить
при нажатии на каждую кнопку. Методом querySelector выберите в переменной container элемент с классом form__submit-btn_action_add и
сохраните его в переменной addButton. Этим же методом выберите элемент с классом form__submit-btn_action_reset и сохраните
в переменной resetButton.*/
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');
/*Кнопки, как и другие HTML-элементы, могут быть найдены методом*/

/*Когда в плейлисте нет песен, кнопка «Очистить плейлист» должна быть неактивна.
Методом setAttribute добавьте атрибут disabled кнопке resetButton, если количество
песен равно 0.*/
if (songs.length === 0) {
    resetButton.setAttribute('disabled', 'true');
    resetButton.setAttribute('style', 'background-color:#f1f1f1');
}
/*Принято отдельно прописывать стили для неактивных кнопок.
    Задайте неактивной кнопке цвет фона #f1f1f1.*/
/*Отлично! Отметим, что задачу можно решить двумя способами:
    resetButton.setAttribute('style', 'background-color: #f1f1f1');
        или
        resetButton.style.backgroundColor = '#f1f1f1';*/
