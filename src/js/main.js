import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
import './components/sliders';

$(function () {

  $('.burger, .menu__link').on('click', function () {
    $('.menu__list, .burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
