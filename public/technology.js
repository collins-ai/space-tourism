const changeTechnologyPageBackground = () => {
    const technologyPage = document.getElementById(`technologyPage`)
    const image = document.getElementById(`image`)
    const technologyBackgroundImages = [
        `assets/technology/background-technology-mobile.jpg`,
        `assets/technology/background-technology-tablet.jpg`,
        `assets/technology/background-technology-desktop.jpg`
    ]

    if(window.innerWidth < 640) {
        technologyPage.style.backgroundImage = `url(${technologyBackgroundImages[0]})`
        image.src = `assets/technology/image-launch-vehicle-landscape.jpg`
    }else if(window.innerWidth >= 640 && window.innerWidth < 1024) {
        technologyPage.style.backgroundImage = `url(${technologyBackgroundImages[1]})`
        image.src = `assets/technology/image-launch-vehicle-landscape.jpg`
    }else {
        technologyPage.style.backgroundImage = `url(${technologyBackgroundImages[2]})`
        image.src = `assets/technology/image-launch-vehicle-portrait.jpg`
    }
}
window.addEventListener(`load`, changeTechnologyPageBackground)
window.addEventListener(`resize`, changeTechnologyPageBackground)

let initial

const technologies = document.querySelectorAll(`.technology`)
technologies.forEach((technology, index) => {
    const changeTechnologies = () => {
        const image = document.getElementById(`image`)
        const name = document.getElementById(`name`)
        const description = document.getElementById(`description`)
        const first = document.getElementById(`first`)
    
        fetch(`data.json`).then(request => {
            return request.json()
        }).then(data => {
            if(window.innerWidth < 1024) {
                image.src = `${data.technology[index].images.landscape}`
            }else {
                image.src = `${data.technology[index].images.portrait}`
            }
            name.innerHTML = `${data.technology[index].name}`
            description.innerHTML = `${data.technology[index].description}`
        })

        first.classList.remove(`technologyStyle`)
        technology.classList.add(`technologyStyle`)
        if(initial) {
            initial.classList.remove(`technologyStyle`)
        }
        initial = technology
    }
    technology.addEventListener(`click`, changeTechnologies)
})

const hamburgerButton = document.getElementById(`hamburger`)
const closeButton = document.getElementById(`close`)

const toggleNavigation = () => {
    const navigation = document.getElementById(`navigation`)
    navigation.classList.toggle(`toggleNavigation`)
    hamburgerButton.classList.toggle(`hideHamburger`)
}
hamburgerButton.addEventListener(`click`, toggleNavigation)
closeButton.addEventListener(`click`, toggleNavigation)