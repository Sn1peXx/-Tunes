export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio'),
          radioCoverImg = document.querySelector('.radio-cover__img'),
          radioNavigation = document.querySelector('.radio-navigation'),
          radioItem = document.querySelectorAll('.radio-item'),
          radioHeader = document.querySelector('.radio-header__big'),
          radioStop = document.querySelector('.radio-stop');


    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true; //Блокировка кнопки play

    const changeIconPlay = () => { //Изменинеи внешнего вида кнопки
        if (audio.paused) {
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
            radio.classList.remove('play') //Вращение диска
        } else {
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
            radio.classList.add('play')
        }
    };

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }

    radioNavigation.addEventListener('change', (event) => { //Выбор радио станции
        radioStop.disabled = false; 
        const target = event.target;
        const parent = target.closest('.radio-item');
        selectItem(parent);

        const title = parent.querySelector('.radio-name').textContent;
        radioHeader.textContent = title;

        const urlImg = parent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;

        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => { //Пауза Пуск
        if (audio.paused) {
            radio.classList.add('play');
            audio.play();
            changeIconPlay();
        } else {
            audio.pause();
            changeIconPlay();
        }
    });
}
