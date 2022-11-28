import * as flsFunctions from "./modules/functions.js"
import menu from './modules/menu.js'
import Anchor from './modules/anchor.js'
import Modal from './modules/modal.js'

//Переключение мобильного меню
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    if(menu.isOpen) {
        menu.close()
    } else {
        menu.open()
    }
})

//Закрытие мобильного меню при изменении разрешения на декстопную версию
window.addEventListener('resize', () => {
    if(window.innerWidth > 840 && menu.isOpen) {
        menu.close()
    }
})


//Универсальный якорь для пунктов меню
const anchors = document.querySelectorAll('.menu__item')
new Anchor(anchors, burger, menu)


//Создание поведения модального окна
new Modal('modal-contacts')

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/