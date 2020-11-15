# Краткое руководство по JavaScript


## Что такое JS?

Язык программирования, который изначально создавался, чтобы "оживить" странички, работать с существующим объектом или системой, для управления внешним объектом.

JavaScript является полностью независимым языком (от Java) со своей собственной спецификацией, называющейся ECMAScript.

*ECMAScript - это стандарт, изданный Ecma International. В нём прописана спецификация скриптового языка общего назначения. Содержит правила, сведения и рекомендации, которые должны соблюдаться скриптовым языком, чтобы он считался совместимым с ECMAScript.*


### JS движок

Программа или интерпретатор, способный понимать и выполнять JavaScript-код.

Обычно используются в веб-браузерах:

- V8 – в Chrome и Opera.
- SpiderMonkey – в Firefox.
- …Ещё есть «Trident» и «Chakra» для разных версий IE, «ChakraCore» для Microsoft Edge, «Nitro» и «SquirrelFish» для Safari и т.д.

Движки сложны. Но основы понять легко.

1. Движок (встроенный, если это браузер) читает («парсит») текст скрипта.
2. Затем он преобразует («компилирует») скрипт в машинный язык.
3. После этого машинный код запускается и работает достаточно быстро.


### Что может JS?

- оживлять сайты;

- создавать мобильные и декстопные приложения;

- создавать расширения для браузера;

- создавать серверные, консольные приложения;

- программировать какую--либо технику, роботов;

- создавать игры и т.д.


### Что не может JS?

- JavaScript на веб-странице **не может читать/записывать произвольные файлы на жёстком диске, копировать их или запускать программы.** Он не имеет прямого доступа к системным функциям ОС.

- Различные окна/вкладки не знают друг о друге. Иногда одно окно, используя JavaScript, открывает другое окно. Но даже в этом случае **JavaScript с одной страницы не имеет доступа к другой, если они пришли с разных сайтов** (с другого домена, протокола или порта).

Это называется «Политика одинакового источника» (Same Origin Policy). Чтобы обойти это ограничение, обе страницы должны согласиться с этим и содержать JavaScript-код, который специальным образом обменивается данными.

- JavaScript может легко взаимодействовать с сервером, с которого пришла текущая страница. Но **его способность получать данные с других сайтов/доменов ограничена**.


### Что может JS в браузере?

В браузере для JavaScript доступно всё, что связано с манипулированием веб-страницами, взаимодействием с пользователем и веб-сервером.

Например, в браузере JavaScript может:

- Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.
- Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.
- Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии **AJAX** и **COMET**).
- Получать и устанавливать куки (содержат разную информацию о сайтах, которые Вы ранее посещали), задавать вопросы посетителю, показывать сообщения.
- Запоминать данные на стороне клиента («local storage»).


### Три сильные стороны JS

- Полная интеграция с HTML/CSS.
- Простые вещи делаются просто.
- Поддерживается всеми основными браузерами и включён по умолчанию.


## JS ошибки

4 типа ошибок:

1. **Syntax error**. Неверное использование языка. Часто лишние или недостающие скобки или кавычки. 
**Что делать?** Заменить, удалить или добавить символы. Часто проблема в скобках или кавычках: открытые скобки должны быть закрыты, открытые кавычки должны быть закрыты.
2. **Reference error**. Использование несуществующего названия. 
**Что делать?** Проверить, существует ли то, на что вы ссылаетесь. Возможно вы использовали ошибочное название или забыли его создать.
3. **Type error**. Использование неверного типа, например попытка вызвать константу числа, как функцию.
**Что делать?** Убедиться, что всё используется верно. Часто проблема в простой путанице: вы создали численную константу и функциональную константу, а потом пытаетесь вызвать число. Вероятно вы собирались вызвать функцию.
4. **Logic error**. (Логическая ошибка) Ваш код выполняет не то, что требуется, но программа запускается и не выдаёт ошибок трёх перечисленных выше типов. Сломана логика. 
**Что делать?** Проверить свой код, убедиться, что он выполняет то, что должен.


## Инструкции JS

Это указание на совершение какого-либо действия (создать переменную, запустить цикл, выполнить условную инструкцию, выйти из функции и т.п.).

Любая программа представляет собой последовательность выполняемых инструкций. Окончание инструкции обозначается символом ; (точка с запятой).

### **querySelector**

Инструкция, которая находит запрашиваемый элемент

*Синатксис:* document.querySelector('.page');

### querySelectorAll

Инструкция, которая находит все запрашиваемые элементы

*Синатксис:* document.querySelectorAll('.page');

### console.log

Помогает тестировать код, выводить сообщения, а также результаты выполнения инструкций; отладка, процесс поиска и исправлений ошибок.

*Синтаксис*: console.log(document.query.Selector('.page'));

### alert, prompt, confirm

3 функции браузера для взаимодействия с пользователем

Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать с остальной частью страницы до тех пор, пока окно не будет закрыто.

На все указанные методы распространяются два ограничения:

1. Расположение окон определяется браузером. Обычно окна находятся в центре.
2. Визуальное отображение окон зависит от браузера, и мы не можем изменить их вид.

**alert** - выводит сообщение в виде модального окна и ждет, пока пользователь нажмет "ок"

*Синтаксис*: alert("Hello");

**prompt** - функция принимает два аргумента

Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

*Синтаксис*: result = prompt(title, [default]);

**`title` -** Текст для отображения в окне.

**`default`-** Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.

Пользователь может напечатать что-либо в поле ввода и нажать OK. Введённый текст будет присвоен переменной `result`. Пользователь также может отменить ввод нажатием на кнопку «Отмена» или нажав на клавишу Esc. В этом случае значением `result` станет `null`.

Вызов `prompt` возвращает текст, указанный в поле для ввода, или `null`, если ввод отменён пользователем.

Показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или null, если была нажата кнопка «Отмена» или Esc с клавиатуры.

При обращении к переменной функция прописывается с обратными кавычками

**confirm**

Функция `confirm` отображает модальное окно с текстом вопроса `question` и двумя кнопками: OK и Отмена.

Результат – `true`, если нажата кнопка OK. В других случаях – `false`.

*Синтаксис*: let isBoss = confirm("Ты здесь главный?");
             alert(isBoss); true, если нажата копка ОК


### ClassList

Является геттером. Возвращаемый им объект имеет несколько методов:

**add( String [,String] )**  Добавляет элементу указанные классы

**remove( String [,String] )** Удаляет у элемента указанные классы

**item** ( Number ) Результат аналогичен вызову **`сlassList[Number]`**

**toggle** ( String [, Boolean]) Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет. Если вторым параметром передан undefined или переменная с typeof == 'undefined', поведение будет аналогичным передаче только первого параметра при вызове. Позволяет переключать класс много раз.

toggle.**contains** ( String ) Проверяет, есть ли данный класс у элемента (вернет true или false)

### Объявление переменных и констант

Переменная – это «именованное хранилище» для данных

Переменные можно менять, а константы - нет, это постоянная величина

var keyword = document.querySelector('.page'); <— устарело, не используем

let - ключевое слово

let header = document.querySelector('.page')  ←- значение;

const new = 12; 

= знак присвоения

== знак равно

Мы также можем объявить две переменные и скопировать данные из одной в другую.

**Повторное объявление вызывает ошибку**. Поэтому следует объявлять переменную только один раз и затем использовать её уже без let.

Название «константа» просто означает, что значение переменной никогда не меняется. Но есть константы, которые известны до выполнения (например, шестнадцатеричное значение для красного цвета), а есть константы, которые вычисляются во время выполнения сценария, но не изменяются после их первоначального назначения.

Константы с именами, записанными заглавными буквами, используются только как псевдонимы для «жёстко закодированных» значений.

### Имена переменных

В JavaScript есть два ограничения, касающиеся имён переменных:

1. Имя переменной должно содержать только буквы, цифры или символы `$` и `_`.
2. Первый символ не должен быть цифрой.

Если имя содержит несколько слов, обычно используется верблюжья нотация, то есть, слова следуют одно за другим, где каждое следующее слово начинается с заглавной буквы: myVeryLongName.

**Несколько хороших правил:**

- Используйте легко читаемые имена, такие как `userName` или `shoppingCart`.
- Избегайте использования аббревиатур или коротких имён, таких как `a`, `b`, `c`, за исключением тех случаев, когда вы точно знаете, что так нужно.
- Делайте имена максимально описательными и лаконичными. Примеры плохих имён: `data` и `value`. Такие имена ничего не говорят. Их можно использовать только в том случае, если из контекста кода очевидно, какие данные хранит переменная.
- Договоритесь с вашей командой об используемых терминах. Если посетитель сайта называется «user», тогда мы должны называть связанные с ним переменные `currentUser` или `newUser`, а не, к примеру, `currentVisitor` или `newManInTown`.


## Типы данных

В JavaScript есть 8 основных типов.

- **number** для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).

- **bigint** для целых чисел произвольной длины.

- **string** для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.

- **boolean** для true/false.

- **null** для неизвестных значений – отдельный тип, имеющий одно значение null.

- **undefined** для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.

- **object** для более сложных структур данных.

- **symbol** для уникальных идентификаторов.

Оператор **typeof** позволяет нам увидеть, какой тип данных сохранён в переменной.

Имеет две формы: typeof x или typeof(x).
Возвращает строку с именем типа. Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

