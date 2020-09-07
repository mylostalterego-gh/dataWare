import '../styles/index.scss';
import $ from 'jquery';
import 'slick-carousel/slick/slick';

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
});
