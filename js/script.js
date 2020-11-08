//document.querySelector('.page').classList.remove('second-page');

/*
// Элемент input помещен в одноименную переменную. Значение input выведено в консоль
let input = document.querySelector('input');
console.log(input.value);

// Элемент p помещен в переменную paragraph.
// Для дальнейшей работы элементу form также присвоена переменная
let paragraph = document.querySelector('p');
let form = document.querySelector('form');

// Прописана инструкция, с помощью которой данные поля выводятся на страницу как текстовое содержимое элемента paragraph. Благодаря прописанному методу preventDefault отправка формы не осуществляется.
form.onsubmit = function(evt) {
    evt.preventDefault();
    paragraph.textContent = input.value;
};


// Произведено вычисление, результат которого выведен на экран. Скобки расставлены таким образом, чтобы сложение осуществлялось в первую очередь
console.log(55 * ( 7 + 2 ) / ( 4 + 2 ));
*/

let heart = document.querySelector('.heart');
heart.onclick = function () {
    likesNumber.textContent = counter;
  	heart.classList.toggle('added');
};

// Классу likes-number присвоена переменная likesNumber
let likesNumber = document.querySelector('.likes-number');

// Объявлена переменная сounter, которой присвоено значение 0
let counter = 0; 