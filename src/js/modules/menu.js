const burger = document.querySelector('.burger')
const headerTop = document.querySelector('.header__top')
const body = document.querySelector('body')
const langs = document.querySelector('.denis__langs')

export default {
    isOpen: false,
    open() {
        burger.classList.add('active')
        headerTop.classList.add('active')
        langs.classList.add('active')
        body.classList.add('lock')
        this.isOpen = true
    },
    close() {
        burger.classList.remove('active')
        headerTop.classList.remove('active')
        langs.classList.remove('active')
        body.classList.remove('lock')
        this.isOpen = false
    }
}