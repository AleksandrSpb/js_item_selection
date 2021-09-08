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

/*Принято отдельно прописывать стили для неактивных кнопок.
    Задайте неактивной кнопке цвет фона #f1f1f1.*/
/*Отлично! Отметим, что задачу можно решить двумя способами:
    resetButton.setAttribute('style', 'background-color: #f1f1f1');
        или
        resetButton.style.backgroundColor = '#f1f1f1';*/

/*Неудобно стилизовать элементы, задавая атрибут style: лучше обращаться к свойствам
classList или className. Удалите последний вызов метода setAttribute и вместо него
напишите код, добавляющий кнопке класс form__submit-btn_disabled.
resetButton.classList.add('form__submit-btn_disabled'); - ответ на задание*/

/*Если в плейлисте появятся песни, кнопка «Очистить плейлист» должна стать активной. Для этого добавим условной конструкции блок else. Если количество песен не нулевое, кнопка должна лишаться атрибута disabled и класса form__submit-btn_disabled.
if (songs.length === 0) {
    resetButton.setAttribute('disabled', true);
    resetButton.classList.add('form__submit-btn_disabled');
} else {
    // здесь уберём атрибут "disabled"
    // а здесь уберём класс "form__submit-btn_disabled"
} */
if (songs.length === 0) {
    resetButton.setAttribute('disabled', 'true');
    /*resetButton.setAttribute('style', 'background-color:#f1f1f1'); - правильно для
    предыдущего задания*/
    resetButton.classList.add('form__submit-btn_disabled');
}
else {
    resetButton.removeAttribute('disabled', 'true');    // здесь уберём атрибут "disabled"
    resetButton.classList.remove('form__submit-btn_disabled');// а здесь уберём класс "form__submit-btn_disabled"
}

/*Пришло время добавлять песни. Мы подготовили разметку одного трека:
    <div class="song">
        <h4 class="song__artist">Кино</h4>
        <p class="song__title">Дерево</p>
        <button class="song__like"></button>
    </div>
Добавьте этот блок кода внутрь контейнера songs-container. Контейнер содержится в переменной songsContainer.
Между тегами <h4></h4> и <p></p> можете указать названия любого другого исполнителя и песни — пока это неважно.
Кнопку «Добавить» вы тоже заставите работать позже.
Напишите функцию addSong. Она должна добавлять разметку песни в контейнер songs-container.
Не забудьте, что функцию нужно не только описать, но и вызвать: только так песня будет добавлена.*/
function addSong () {
    let songscontainer = document.querySelector('.songs-container');
    songscontainer.innerHTML += `<div class="song">
        <h4 class="song__artist">Кино</h4>
        <p class="song__title">Дерево</p>
        <button class="song__like"></button>
    </div>`;
    return songscontainer;
}
addSong();
addSong();
addSong();

/*ПОДСКАЗКА
это в подсказке я сделал по другому как в коде
Используйте innerHTML, чтобы вставить разметку в контейнер:
    function addSong() {
        /!* вставим разметку с помощью innerHTML
        Используйте обратные кавычки, чтобы разместить её
        на нескольких строчках *!/

        songsContainer.innerHTML = `
        <div class="song">
          <h4 class="song__artist">Кино</h4>
          <p class="song__title">Дерево</p>
          <button class="song__like"></button>
        </div>
  `;
    }

// не забудьте вызвать функцию
addSong(); */
/*Работает. Но есть пара проблем:
каждый новый вызов функции будет перезаписывать содержимое контейнера songs-container.
Песни будут не добавляться, а перезаписывать друг друга
даже после добавления песни надпись «Нет добавленных песен» не исчезла.
Скоро мы это исправим.*/

/*Сейчас функция addSong перезаписывает содержимое контейнера songs-container:
function addSong() {
    songsContainer.innerHTML = `
        <div class="song">
          <h4 class="song__artist">Кино</h4>
          <p class="song__title">Дерево</p>
          <button class="song__like"></button>
        </div>
  `;
}

addSong();
addSong();
addSong();

/!* здесь три вызова, но в итоге будет добавлена лишь одна песня
можете проверить это, вызвав функцию несколько раз *!/
Нам же нужно, чтобы каждая новая песня вставала в конец списка, и не трогала другие треки. Для этого достаточно добавить один символ в код функции. Ваша задача — сделать это.
    Когда функция будет готова, вызовите её несколько раз, чтобы убедиться, что песни добавляются, а не перезаписываются:
    addSong();
addSong();
addSong(); */

/*ПОДСКАЗКА
Наша разметка — это строка. Чтобы добавить в конец одной строки другую, нужно выполнить конкатенацию. С этим поможет оператор «присваивание со сложением»: +=.
function addSong() {
    songsContainer.innerHTML += `
        <div class="song">
          <h4 class="song__artist">Кино</h4>
          <p class="song__title">Дерево</p>
          <button class="song__like"></button>
        </div>
  `;
}

addSong();
addSong();
addSong();
Тот же результат можно получить и более длинной записью:
    function addSong() {
        songsContainer.innerHTML = songsContainer.innerHTML + `
        <div class="song">
          <h4 class="song__artist">Кино</h4>
          <p class="song__title">Дерево</p>
          <button class="song__like"></button>
        </div>
  `;
    }

addSong();
addSong();
addSong(); */
