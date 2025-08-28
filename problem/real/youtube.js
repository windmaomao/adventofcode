setInterval(() => {
  let elm = document.querySelector('.ytp-skip-ad-button');
  if (elm) {
    let video = document.querySelector('video');
    video.playbackRate = 16;
    video.volume = 0;
  }
}, 1000);
