import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const burger = document.querySelector('.burger')
const headerTop = document.querySelector('.header__top')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerTop.classList.toggle('active')
    body.classList.toggle('lock')
})

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/