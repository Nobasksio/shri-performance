let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;

const changeWidth = () => {
  if (window.innerWidth !== initialWidth) {
    initialWidth = window.innerWidth;
    rerender(1)
  }
};
const changeHeight = () => {
  if (window.innerHeight !== initialHeight) {
    initialHeight = window.innerHeight;
    rerender(2)
  }
};

const changeDiog = () => {
  if (window.innerWidth !== initialWidth) {
    rerender(3);
  }
}

const mobileOne = () => {
    rerender(4);
}

let steps = [
  {
    listener: changeWidth,
    html: `<div class="center">
      Приступим. 
      <br/>Измените, пожалуйста, ширину браузера
   </div>
   <div class="width"></div>
   `
  },
  {
    listener: changeHeight,
    html: `
        <div class="center">
            Отлично. А вы способный
            <br/>Теперь высоту
        </div>
        <div class="width success"></div>
        <div class="height"></div>
      `
  },
  {
    listener: changeDiog,
    html: `<div class="center">
            Восхитительно, и как у вас получается. 
            <br/>Теперь сразу оба. (потените за угол)
        </div>
        <div class="width success"></div>
        <div class="height success"></div>
        <div class="width-2"></div>
        <div class="height-2"></div>`
  },
  {
    listener: null,
    mounted: () => {
      mishureSpeed( () => rerender(4))
    },
    html: `
     <div class="center" id="sign">
          Превосходно! 
            <br/>Теперь проведите мышью через эту надпись как можно скорее
        </div>
           <div class="width success"></div>
           <div class="height success"></div>
           <div class="width-2 success"></div>
           <div class="height-2 success"></div>
      `
  },
  {
    listener: null,
    html: ` <div class="bg-green">
        <div class="center">
            Вы поете великолепно! 
            <br/>Ваш уровень iq 150 баллов. 
            <br/>Спасибо за участие.
        </div>
           <div class="width success"></div>
           <div class="height success"></div>
           <div class="width-2 success"></div>
           <div class="height-2 success"></div>
        </div>`
  },
  {
    listener: mobileOne,
    html: `
        <div class="center">
            Просто переверните устройство на 90 градусов! 
            <br> А потом перезайти с дестопа
        </div>
        </div>`
  }

];

const rerender = (stepIndex) => {
  // удаляем предыдущий листенер
  if (steps[stepIndex - 1]) {
    window.removeEventListener('resize', steps[stepIndex - 1].listener);
  }

  const cont = document.querySelector('#root');

  // ставим наш новый листенер
  if (steps[stepIndex].listener) {
    setTimeout(() => {
      window.addEventListener('resize', steps[stepIndex].listener);
    }, 1000);
  }
  // рендерим шаг
  cont.innerHTML = steps[stepIndex].html;

  // выполняем функцию после монтирования компонента
  if (steps[stepIndex].mounted) {
    steps[stepIndex].mounted();
  }
}
