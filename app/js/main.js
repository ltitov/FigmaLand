const iconMenu = document.querySelector('.menu__icon'),
  menuNav = document.querySelector('.menu__nav'),
  playButton = document.querySelector('.features__play'),
  videoContent = document.querySelector('.features');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuNav.classList.toggle('_active');
  });
}

// Play Video Content 



videoContent.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.features__media video');
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });
  playButton.forEach((el) => {
    el.style.display = 'block';
  });
});

playButton.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.features__media').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none';
    setTimeout(() => {
      video.volume = 0.5;
    }, 1000);
  });
});