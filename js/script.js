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
    for(let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Выводим функцию range через alert
alert(range(15, 30));