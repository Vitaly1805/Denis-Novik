let modalWindow = document.querySelector('.modal-wrapper')
const body = document.querySelector('body')
let containers = document.querySelectorAll('._container')
const widthScroll = window.innerWidth - document.documentElement.clientWidth

function addPaddingContainers() {
    containers.forEach(e => {
        e.parentElement.style.marginRight = widthScroll + 'px'
    })
}

function removePaddingContainers() {
    containers.forEach(e => {
        e.parentElement.style.marginRight = '0px'
    })
}

export default {
    isOpen: false,
    open() {
        addPaddingContainers()
        modalWindow.classList.add('active')
        body.classList.add('lock')
        this.isOpen = true
    },
    close() {
        removePaddingContainers()   
        modalWindow.classList.remove('active')
        body.classList.remove('lock')
        this.isOpen = false
    }
}
