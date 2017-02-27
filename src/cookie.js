/**
 * ДЗ 7.2 - Создать редактор cookie с возможностью фильтрации
 *
 * На странице должна быть таблица со списком имеющихся cookie:
 * - имя
 * - значение
 * - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)
 *
 * На странице должна быть форма для добавления новой cookie:
 * - имя
 * - значение
 * - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)
 *
 * Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено
 *
 * На странице должно быть текстовое поле для фильтрации cookie
 * В таблице должны быть только те cookie, в имени или значении которых есть введенное значение
 * Если в поле фильтра пусто, то должны выводиться все доступные cookie
 * Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 * Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 * то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена
 *
 * Для более подробной информации можно изучить код тестов
 *
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */
import {
    createCookie,
    deleteCookie
} from './index';

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */



let homeworkContainer = document.querySelector('#homework-container');
let filterNameInput = homeworkContainer.querySelector('#filter-name-input');
let addNameInput = homeworkContainer.querySelector('#add-name-input');
let addValueInput = homeworkContainer.querySelector('#add-value-input');
let addButton = homeworkContainer.querySelector('#add-button');
let listTable = homeworkContainer.querySelector('#list-table tbody');

/**
 * Функция должна проверять встречается ли подстрока chunk в строке full
 * Проверка должна происходить без учета регистра символов
 *
 * @example
 * isMatching('Moscow', 'moscow') // true
 * isMatching('Moscow', 'mosc') // true
 * isMatching('Moscow', 'cow') // true
 * isMatching('Moscow', 'SCO') // true
 * isMatching('Moscow', 'Moscov') // false
 *
 * @return {boolean}
 */
function isMatching(full, chunk) {
    var string = full.toLowerCase(),
        substring = chunk.toLowerCase();
    
    return string.includes(substring);
}
/**
 * Функция должна проверять есть ли одинаковая запись в таблице 
 * если есть, то обнавляет значение куки в таблице
 * 
 * @param name - имя куки
 * @param value - значение куки
 * 
 * @example
 * isExists('Moscow') // true
 * isExists('Moscow2') // false
 *
 * @return {boolean}
 */
function isExists(name, value) {
    for(let i=0; i < listTable.rows.length; i++) {
        let cookieNameInCell = listTable.rows[i].cells[0].innerHTML;
        let cookieValueCell = listTable.rows[i].cells[1];

        if (cookieNameInCell == name) {
            cookieValueCell.innerHTML = value;
            return true;
        }
    }
   return false;

}
/**
 * Создает новый tr для таблицы со списком cookie
 *
 * @param name - имя cookie
 * @param value - значение cookie
 */
function createCookieTr(name, value) {
    if(!isExists(name,value)) {
        // Insert a row in the 0
        let newRow   = listTable.insertRow(0);

        // Insert cells in the row at index 0
        let newCell  = newRow.insertCell(0);
        let newCel2  = newRow.insertCell(1);
        let newCel3  = newRow.insertCell(2);

        // create delete button
        var element = document.createElement('button');
        element.innerHTML = "Удалить";
        element.onclick = ()=> deleteRowAndCookie(newRow, name); 
        
        newCell.innerHTML = name;
        newCel2.innerHTML = value;
        newCel3.appendChild(element);
    }
}
/**
 * Удаляет запись таблицы и cookie
 *
 * @param row - row
 * @param name - name cookie
 */
function deleteRowAndCookie(row, name) {
    row.parentNode.removeChild(row);
    deleteCookie(name);
}

filterNameInput.addEventListener('keyup', function() {
    let value = this.value.trim();

    filterResult.innerText = '';    

    if (value != '') {
        filterResult.innerText = null;
            // console.log(cities);
        for (let i=0; i < cities.length; i++) {
            // console.log(cities[i].name);
            if (isMatching(cities[i].name, value)) {
                filterResult.innerText += cities[i].name + '\n';
            }
        }
    }
});

addButton.addEventListener('click', () => {
    if(addNameInput.value != '') {
        createCookieTr(addNameInput.value, addValueInput.value);
        createCookie(addNameInput.value, addValueInput.value);
    }
});

