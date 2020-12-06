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