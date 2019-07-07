import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('body').on('keydown', function (k) {
    const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise !== null) {
      playPromise.catch(() => { audio.play(); });
    }

    console.log(audio);
    console.log(playPromise);

  });
});
