# shri-performance


Я считал следующие метрики(кроме базовых которые и так были):

1. Операционную систему пользователя
2. Браузер
3. Плотность пикселей
4. Диагональ документа
5. Портретная или альбомная ориентация экрана
6. Скорость курсора в определнных местах
7. А так же пройденый курсором путь

Так как при постановки задания было необходимо среди прочего выбрать «прикольные» метрики. Поэтому часть из выбранных метрик были именно выбраны по этому принципу. 

Так же для сбора этих метрик был реализован не большой шуточный сайт. 

Чтобы людям было не скучно их(метрии) с себя снимить.

Зайдите и вы:

https://nobasksio.github.io/shri-performance/

Я осознаю что действия в тесте немного компроментируют часть метрик.)) 

Интерфейс для сравнения метрик к сожалению реализовать уже не успевал по времени но функции из задания реализовал. Результаты расчетов выводятся в консоли. 

// показать значение метрики за несколько дней

function showMetricByPeriod(data, name, dateStart, dateFinish) 

// показать сессию пользователя

function showSession(data, sessionId)


// сравнить метрику в разных срезах

function compareMetric(data, atr, name)


Коды счетчиков я заинлайнил в страницу сбора для максимально быстрой доставки клиенту
их можно посмотреть [тут](https://github.com/Nobasksio/shri-performance/blob/main/get.js)


Код обработки [тут](https://github.com/Nobasksio/shri-performance/blob/main/get.js)
