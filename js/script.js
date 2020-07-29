import { radioPlayerInit } from './radio.js';
import { musicPlayerInit } from './music.js';
import { videoPlayerInit } from './video.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivetionPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach((item) => { item.classList.remove('active') });
    playerBlock.forEach((item) => { item.classList.remove('active') });
}

playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivetionPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    });
})

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();