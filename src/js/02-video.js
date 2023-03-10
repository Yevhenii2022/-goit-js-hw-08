import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimeupdateIframe), 1000);

function handleTimeupdateIframe({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

const currentTime = localStorage.getItem(STORAGE_KEY) || 0;

player.setCurrentTime(currentTime).catch(function (error) {
  console.log(error.name);
  console.log(error.message);
});
