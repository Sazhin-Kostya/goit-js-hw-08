import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log('kjkjkj')

const getCarrentTime = function (carrentTime) {
    const seconds = carrentTime.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
    
};
player.on('timeupdate', throttle(getCarrentTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);


