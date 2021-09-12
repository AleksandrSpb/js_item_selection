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
// let songs = songsContainer.querySelectorAll('.song');
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
/*if (songs.length === 0) {
    resetButton.setAttribute('disabled', 'true');
    /!*resetButton.setAttribute('style', 'background-color:#f1f1f1'); - правильно для
    предыдущего задания*!/
    resetButton.classList.add('form__submit-btn_disabled');
}
else {
    resetButton.removeAttribute('disabled', 'true');    // здесь уберём атрибут "disabled"
    resetButton.classList.remove('form__submit-btn_disabled');// а здесь уберём класс "form__submit-btn_disabled"
}*/

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
function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');
    let noSongsElement = container.querySelector('.no-songs');
    if (songs.length === 0) {
        resetButton.setAttribute('disabled', 'true');
        /*resetButton.setAttribute('style', 'background-color:#f1f1f1'); - правильно для
        предыдущего задания*/
        resetButton.classList.add('form__submit-btn_disabled');
        noSongsElement.classList.add('no-songs_hidden');
        noSongsElement.classList.remove('no-songs_hidden');

    }
    else {
        resetButton.removeAttribute('disabled', 'true');    // здесь уберём атрибут "disabled"
        resetButton.classList.remove('form__submit-btn_disabled');// а здесь уберём класс "form__submit-btn_disabled"
        noSongsElement.classList.remove('no-songs_hidden');
        noSongsElement.classList.add('no-songs_hidden');
    }
}
function addSong () {
    let artist = document.querySelector('.input__text_type_artist');
    let song = document.querySelector('.input__text_type_song');
    let songscontainer = document.querySelector('.songs-container');
    /*songscontainer.innerHTML += `<div class="song">   <h4 class="song__artist">Кино</h4>
        <p class="song__title">Дерево</p>
        <button class="song__like"></button>
    </div>`;*/
    songsContainer.insertAdjacentHTML('beforeend', `
        <div class="song">
          <h4 class="song__artist">${artist.value}</h4>
          <p class="song__title">${song.value}</p>
          <button class="song__like"></button>
        </div>
  `);
    artist.value = '';
    song.value = '';
    renderAdded();
}
/*
addSong();
addSong();
addSong();
*/

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
addButton.addEventListener('click', addSong);
renderAdded();
/*Пришло время добавить интерактивность!
    Свяжем функцию addSong с кнопкой «Добавить». Для этого добавьте обработчик события методом addEventListener. Передайте ему 2 аргумента: тип события click и функцию-обработчик addSong.
    Не забудьте удалить вызовы в коде — они были нужны только для тестирования функции:
// удалите эти вызовы

    addSong();
addSong();
addSong();*/
/*Вы уже добавили новые треки, а кнопка «Очистить плейлист» по-прежнему неактивна. Всё из-за конструкции:
    if (songs.length === 0) {
        resetButton.setAttribute('disabled', true);
        resetButton.classList.add('form__submit-btn_disabled');
    } else {
        resetButton.removeAttribute('disabled');
        resetButton.classList.remove('form__submit-btn_disabled');
    }
Она срабатывает только единожды в начале кода. Нам же нужно, чтобы она отрабатывала дважды: при первом запуске кода и при добавлении песен.
    Если код должен отрабатывать в разных местах, его следует вынести в функцию. Сделаем это. Перед объявлением функции addSong объявите функцию renderAdded. Поместите в неё нашу условную конструкцию:
    function renderAdded() {
        // переместите условную конструкцию сюда
    }

function addSong() {
    songsContainer.innerHTML += `
        <div class="song">
            <h4 class="song__artist">Кино</h4>
            <p class="song__title">Дерево</p>
            <button class="song__like"></button>
        </div>
    `;
}
Определение переменной songs тоже перенесите внутрь функции renderAdded. Если этого не сделать, то в songs будут храниться только те песни, что были в контейнере в момент загрузки страницы. Нам это не подходит: нужно, чтобы в songs были все песни, что есть в контейнере. При каждом вызове функции renderAdded надо переопределять переменную songs.
    function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');

    // переместите условную конструкцию сюда
} */
/*Код функции renderAdded должен отработать в трёх местах:
    при загрузке страницы;
когда вы добавляете песню в плейлист;
когда вы очищаете плейлист.
    Третий случай мы пока трогать не будем — вернёмся к нему позже, когда займёмся кнопкой «Очистить плейлист».
Сейчас займёмся первыми двумя. Для этого будем вызывать renderAdded:
    в конце тела функции addSong: при добавлении новых песен условная конструкция будет срабатывать, меняя цвет кнопки;
в конце файла script.js, чтобы покрасить кнопку «Очистить плейлист» в серый цвет при загрузке страницы.
    Добавьте вызовы функции в соответствующие места.*/

/*В плейлист можно добавить новые треки, но надпись «Нет добавленных песен» при этом остаётся на своём месте:
    image
Надпись нужно убирать, если в плейлисте есть песни, и возвращать обратно, когда плейлист пуст. В условной конструкции внутри функции renderAdded мы как раз проверяем, есть ли треки в плейлисте, и меняем внешний вид страницы. Там и будем писать логику, когда нужно показывать надпись «Нет добавленных песен».
Вам понадобятся методы classList.add и classList.remove: вызывайте их для элемента с классом no-songs. Как аргумент передайте методам класс no-songs_hidden.
    Не забудьте определить переменную noSongsElement в начале функции renderAdded. В эту переменную нужно сохранить элемент с надписью «Нет добавленных песен» и вызвать соответствующие методы на ней:
    function renderAdded() {
        let songs = songsContainer.querySelectorAll('.song');

        /!* определите переменную noSongsElement.
        В неё должен попадать элемент с классом .no-songs *!/
        let noSongsElement = container.querySelector('.no-songs');

        if (songs.length === 0) {
            resetButton.setAttribute('disabled', true);
            resetButton.classList.add('form__submit-btn_disabled');
            // добавьте вызов метода здесь
        } else {
            resetButton.removeAttribute('disabled');
            resetButton.classList.remove('form__submit-btn_disabled');
            // и добавьте вызов метода здесь
        }
    } */

/*Сейчас внутри функции addSong мы добавляем новый трек через свойство .innerHTML.
    Замените innerHTML на вызов метода insertAdjacentHTML.
    В скобках укажите:
    первый параметр — строка 'beforeend';
второй параметр — HTML-код, который нужно добавить.*/
/*На странице есть текстовое поле «Исполнитель». Это элемент input с классом input__text_type_artist. Методами querySelector и console.log выведите в консоль тип свойства value этого элемента. Для определения типа используйте оператор typeof.
Сделайте всё это в конце файла script.js: это временный код, дальше мы его уберём.*/
console.log(typeof document.querySelector('.input__text_type_artist').value);
/*До сих пор мы много раз добавляли в плейлист одну и ту же песню. Пора это исправить: брать название и исполнителя трека из текстовых полей. Для этого изменим функцию addSong.
    Для этого сделайте две вещи:
    в начале тела функции addSong объявите переменные artist и song и запишите в них текстовые поля;
сейчас внутри свойства songsContainer.insertAdjacentHTML жёстко указаны исполнитель и название песни. Вместо этого пропишите свойства artist.value и song.value.
    function addSong() {
    let artist = // выберите соответствующий input
        let song = // выберите соответствующий input

        songsContainer.insertAdjacentHTML('beforeend', `
        <div class="song">
          <h4 class="song__artist">${/!* вставьте сюда нужное значение *!/}</h4>
          <p class="song__title">${/!* и сюда *!/}</p>
          <button class="song__like"></button>
        </div>
  `);

    renderAdded();
}
Также код стоит очистить от ненужных выводов в консоль. Удалите вызов console.log, который вы прописывали в предыдущем задании.*/
/*
После того как трек добавлен, текстовые поля нужно очистить, чтобы это не делал сам пользователь. Присвойте свойству value каждого текстового поля пустую строку. Делать это нужно сразу после того, как в плейлисте отрисовывается новая песня.
    function addSong() {
    let artist = document.querySelector('.input__text_type_artist');
    let song = document.querySelector('.input__text_type_song');

    songsContainer.insertAdjacentHTML('beforeend', `
        <div class="song">
            <h4 class="song__artist">${artist.value}</h4>
            <p class="song__title">${song.value}</p>
            <button class="song__like"></button>
        </div>
    `);

    renderAdded();
} */
