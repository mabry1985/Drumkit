import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('body').on('keydown', function (k) {
    const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${k.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('pressed');
    console.log(key);
  });

  function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return;
    };

    this.classList.remove('pressed');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
