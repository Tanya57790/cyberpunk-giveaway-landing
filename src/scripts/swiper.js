'use strict';

import Swiper from 'swiper/core';
import { Autoplay } from 'swiper/modules';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';

const slides = document.querySelectorAll('.swiper-slide.hidden');
slides.forEach(slide => slide.classList.remove('hidden'));
Swiper.use([Autoplay, Keyboard]);

const swiper = new Swiper('.swiper', {
    speed: 1000,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});


