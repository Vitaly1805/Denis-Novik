import * as flsFunctions from "./modules/functions.js"
import modalWindow from './modules/modal.js'

//Переключение мобильного меню
function toogleMenu() {
    burger.classList.toggle('active')
    headerTop.classList.toggle('active')
    langs.classList.toggle('active')
    body.classList.toggle('lock')
}

const burger = document.querySelector('.burger')
const headerTop = document.querySelector('.header__top')
const body = document.querySelector('body')
const langs = document.querySelector('.denis__langs')

burger.addEventListener('click', () => {
    toogleMenu()
})


//Универсальный якорь для пунктов меню
const menuItems = document.querySelectorAll('.menu__item')

menuItems.forEach(menuItem => {
    const blockName = menuItem.className.match(/menu__(?!item)(.*)/) ? menuItem.className.match(/menu__(?!item)(.*)/)[1] : null

    if(blockName) {
        const aboutBlock = document.querySelector('.' + blockName)

        menuItem.addEventListener('click', (event) => {
            event.preventDefault()

            if(burger.classList.contains('active')) {
                toogleMenu()
            }

            aboutBlock.scrollIntoView({alignTop: true, behavior: "smooth"})
        })
    }
})

//Открытие и закрытие модального окна
const btnOpenModal = document.querySelector('.contacts__btn')
const btnCloseModal = document.querySelector('.modal__close')
const modalWrapper = document.querySelector('.modal-wrapper')

btnOpenModal.addEventListener('click', () => {
    modalWindow.open()
})

btnCloseModal.addEventListener('click', () => {
    modalWindow.close()
})

modalWrapper.addEventListener('click', (event) => {
    if(modalWrapper === event.target) {
        modalWindow.close()
    }
})

document.addEventListener('keydown', () => {
    if(modalWindow.isOpen) {
        modalWindow.close()
    }
})

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/