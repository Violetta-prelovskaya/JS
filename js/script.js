let page = document.querySelector('.page');
page.classList.remove('second-page');
page.classList.add('second-page');
document.querySelector('button').classList.add('light-button');
let lightButton = document.querySelector('.light-button');
lightButton.onclick = function(){
    console.log('Кнопка нажата!');
};
document.querySelector('p').classList.add('thank-you');