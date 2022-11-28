export default class {
    items
    burger
    menu

    constructor(anchors, burger, menu) {
        this.anchors = anchors
        this.burger = burger
        this.menu = menu
        this.#setListenerAnchors()
    }

    #setListenerAnchors() {
        if(this.anchors.length > 1) {
            this.anchors.forEach(anchor => {
                const blockName = anchor.className.match(/menu__(?!item)(.*)/) ? anchor.className.match(/menu__(?!item)(.*)/)[1] : null

                if(blockName) {
                    const aboutBlock = document.querySelector('.' + blockName)
            
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault()
            
                        if(this.burger && this.burger.classList.contains('active')) {
                            this.menu.close()
                        }
            
                        aboutBlock.scrollIntoView({alignTop: true, behavior: "smooth"})
                    })
                }
            })
        }
    }
}
