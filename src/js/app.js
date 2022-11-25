import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

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

        console.log(aboutBlock)

        menuItem.addEventListener('click', (event) => {
            event.preventDefault()

            if(burger.classList.contains('active')) {
                toogleMenu()
            }

            aboutBlock.scrollIntoView({alignTop: true, behavior: "smooth"})
        })
    }
})

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/