export const videoPlayerInit = () => {

    const videoPlayer = document.querySelector('.video-player'),
          videoPlayButton = document.querySelector('.video-button__play'),
          videoStopButton = document.querySelector('.video-button__stop'),
          videoProgress = document.querySelector('.video-progress'),
          videoTimePassed = document.querySelector('.video-time__passed'),
          videoTimeTotal = document.querySelector('.video-time__total');

    
    const toggleIcon = () => { //Измениние иконки при паузе
        if (videoPlayer.paused) {
            videoPlayButton.classList.remove('fa-pause');
            videoPlayButton.classList.add('fa-pause');
        } else {
            videoPlayButton.classList.add('fa-pause');
            videoPlayButton.classList.remove('fa-pause');
        }
    };

    const togglePlay = () => { //Остановка или запуск видео
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    };

    const stopPlay = () => { // квадратик
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    const addZero = n => n < 10 ? '0' + n : n; // Добавление нулей к таймеру

    videoPlayer.addEventListener('click', togglePlay);
    videoPlayButton.addEventListener('click', togglePlay)

    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);

    videoStopButton.addEventListener('click', stopPlay);


    videoPlayer.addEventListener('timeupdate', () => { // Таймер
        const currentTime = videoPlayer.currentTime; //Оставшееся время
        const duration = videoPlayer.duration; //Всего времени

        videoProgress.value = (currentTime / duration) * 100; // Полоска времени
        
        let minutePased = Math.floor(currentTime / 60);
        let secondPased = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = addZero(minutePased) + ':' + addZero(secondPased);
        videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);
    });

    videoProgress.addEventListener('change', () => { //Перемещение полоски под видео
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100; 
    })



}