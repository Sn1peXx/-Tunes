export const musicPlayerInit = () => {
    const audio = document.querySelector('.audio'),
          audioImg = document.querySelector('.audio-img'),
          audioHeader = document.querySelector('.audio-header'),
          audioPlayer = document.querySelector('.audio-player'),
          audioNavigation = document.querySelector('.audio-navigation'),
          audioButtonPlay = document.querySelector('.audio-button__play'),
          audioProgress = document.querySelector('.audio-progress'),
          audioProgressTiming = document.querySelector('.audio-progress__timing'),
          audioTimePassed = document.querySelector('.audio-time__passed'),
          audioTimeTotal = document.querySelector('.audio-time__total');

    const playList = ['hello', 'flow', 'speed'];

    let trackIndex = 0;

    function loadTrack() {
        const isPlayed = audioPlayer.paused;
        const track = playList[trackIndex];
        
        audioImg.src = `./audio/${track}.jpg`;
        audioHeader.textContent = track.toUpperCase(); 
        audioPlayer.src = `./audio/${track}.mp3`;

        if (isPlayed) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
    };

    const addZero = n => n < 10 ? '0' + n : n;




    audioNavigation.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('audio-button__play')) {
            audio.classList.toggle('play');
            audioButtonPlay.classList.toggle('fa-play');
            audioButtonPlay.classList.toggle('fa-pause');

            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
            const track = playList[trackIndex];
            audioHeader.textContent = track.toUpperCase();
        }
        
        if (target.classList.contains('audio-button__prev')) {
            if (trackIndex !== 0) {
                trackIndex--;
            } else {
                trackIndex = playList.length - 1;
            }
            loadTrack();
        }

        if (target.classList.contains('audio-button__next')) {
            if (trackIndex === playList.length - 1) {
                trackIndex = 0;
            } else {
                trackIndex++;
            }
            loadTrack();
        }
    });

    audioPlayer.addEventListener('ended', () => {
        if (trackIndex === playList.length - 1) {
            trackIndex = 0;
        } else {
            trackIndex++;
        } 
        loadTrack();
        audioPlayer.play();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        const progress = (currentTime / duration) * 100;

        audioProgressTiming.style.width = progress + '%';

        const minutesPassed = Math.floor(currentTime / 60) || '0';
        const secondPassed = Math.floor(currentTime % 60) || '0';

        const minutesTotal = Math.floor(duration / 60) || '0';
        const secundesTotal = Math.floor(duration % 60) || '0';

        
        audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondPassed)}`;
        audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secundesTotal)}`;
    });

    audioProgress.addEventListener('click', event => {
        const x = event.offsetX;
        const allWidth = audioProgress.clientWidth;
        const progress = (x / allWidth) * audioPlayer.duration;
        audioPlayer.currentTime = progress;

    });
        
}

