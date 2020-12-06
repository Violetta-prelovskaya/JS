// document.querySelector('.page').classList.remove('second-page');

// Задаем переменную name и константу birthYear
let name = 'Violetta';
const birthYear = 1994;
// Прописываем функцию showMessage для выведения приветственного послания пользователю
function showMessage(name) {
    let message = 'Приветствую тебя, ' + name;

    alert(message);
};
// Вызываем функцию
showMessage(name);

/* Создаем функцию range с параметрами start и end. 
* В теле функции создаем пустой массив result, в который с каждой итерацией цикла будет записываться число i, начиная от start и заканчивая end.
*/
function range(start, end) {
    const result = [];
    for(i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Выводим функцию range через alert
alert(range(15, 30));

/* Создаем функцию rangeOdd
* В тело цикла добавляем условие, если остаток i от деления на два равняется 1, добавляй i в массив result
*/

function rangeOdd(start, end) {
    const result = [];
    for(i = start; i <= end; i++) {
        if(i%2 == 1) {
        result.push(i);
        }
    }
    return result;
}

alert(rangeOdd(15, 30));