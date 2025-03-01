const changeCrewPageBackground = () => {
    const crewPage = document.getElementById(`crewPage`)
    const crewBackgroundImages = [
        `assets/crew/background-crew-mobile.jpg`,
        `assets/crew/background-crew-tablet.jpg`,
        `assets/crew/background-crew-desktop.jpg`
    ]

    if(window.innerWidth < 640) {
        crewPage.style.backgroundImage = `url(${crewBackgroundImages[0]})`
    }else if(window.innerWidth >= 640 && window.innerWidth < 1024) {
        crewPage.style.backgroundImage = `url(${crewBackgroundImages[1]})`
    }else {
        crewPage.style.backgroundImage = `url(${crewBackgroundImages[2]})`
    }
}
window.addEventListener(`load`, changeCrewPageBackground)
window.addEventListener(`resize`, changeCrewPageBackground)

let initial

const crews = document.querySelectorAll(`.crew`)
crews.forEach((crew, index) => {
    const changeCrews = () => {
        const image = document.getElementById(`image`)
        const role = document.getElementById(`role`)
        const name = document.getElementById(`name`)
        const bio = document.getElementById(`bio`)
        const last = document.getElementById(`last`)
    
        fetch(`data.json`).then(request => {
            return request.json()
        }).then(data => {
            image.src = `${data.crew[index].images.png}`
            role.innerHTML = `${data.crew[index].role}`
            name.innerHTML = `${data.crew[index].name}`
            bio.innerHTML = `${data.crew[index].bio}`
        })

        last.classList.remove(`crewStyle`)
        crew.classList.add(`crewStyle`)
        if(initial) {
            initial.classList.remove(`crewStyle`)
        }
        initial = crew
    }
    crew.addEventListener(`click`, changeCrews)
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