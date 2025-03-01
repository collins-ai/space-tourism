const changeHomePageBackground = () => {
    const homePage = document.getElementById(`homePage`)
    const homeBackgroundImages = [
        `/public/assets/home/background-home-mobile.jpg`,
        `/public/assets/home/background-home-tablet.jpg`,
        `/public/assets/home/background-home-desktop.jpg`
    ]

    if(window.innerWidth < 640) {
        homePage.style.backgroundImage = `url(${homeBackgroundImages[0]})`
    }else if(window.innerWidth >= 640 && window.innerWidth < 1024) {
        homePage.style.backgroundImage = `url(${homeBackgroundImages[1]})`
    }else {
        homePage.style.backgroundImage = `url(${homeBackgroundImages[2]})`
    }
}
window.addEventListener(`load`, changeHomePageBackground)
window.addEventListener(`resize`, changeHomePageBackground)

const changeDestinationPageBackground = () => {
    const destinationPage = document.getElementById(`destinationPage`)
    const destinationBackgroundImages = [
        `/public/assets/destination/background-destination-mobile.jpg`,
        `/public/assets/destination/background-destination-tablet.jpg`,
        `/public/assets/destination/background-destination-desktop.jpg`
    ]

    if(window.innerWidth < 640) {
        destinationPage.style.backgroundImage = `url(${destinationBackgroundImages[0]})`
    }else if(window.innerWidth >= 640 && window.innerWidth < 1024) {
        destinationPage.style.backgroundImage = `url(${destinationBackgroundImages[1]})`
    }else {
        destinationPage.style.backgroundImage = `url(${destinationBackgroundImages[2]})`
    }
}
window.addEventListener(`load`, changeDestinationPageBackground)
window.addEventListener(`resize`, changeDestinationPageBackground)

const changeCrewPageBackground = () => {
    const crewPage = document.getElementById(`crewPage`)
    const crewBackgroundImages = [
        `/public/assets/crew/background-crew-mobile.jpg`,
        `/public/assets/crew/background-crew-tablet.jpg`,
        `/public/assets/crew/background-crew-desktop.jpg`
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

const changeTechnologyPageBackground = () => {
    const technologyPage = document.getElementById(`technologyPage`)
    const technologyImage = document.getElementById(`technologyImage`)
    const technologyBackgroundImages = [
        `/public/assets/technology/background-technology-mobile.jpg`,
        `/public/assets/technology/background-technology-tablet.jpg`,
        `/public/assets/technology/background-technology-desktop.jpg`
    ]

    if(window.innerWidth < 640) {
        technologyPage.style.backgroundImage = `url(${technologyBackgroundImages[0]})`
        technologyImage.src = `assets/technology/image-launch-vehicle-landscape.jpg`
    }else if(window.innerWidth >= 640 && window.innerWidth < 1024) {
        technologyPage.style.backgroundImage = `url(${technologyBackgroundImages[1]})`
        technologyImage.src = `assets/technology/image-launch-vehicle-landscape.jpg`
    }else {
        technologyPage.style.backgroundImage = `url(${technologyBackgroundImages[2]})`
        technologyImage.src = `assets/technology/image-launch-vehicle-portrait.jpg`
    }
}
window.addEventListener(`load`, changeTechnologyPageBackground)
window.addEventListener(`resize`, changeTechnologyPageBackground)

let initial

const destinations = document.querySelectorAll(`.destination`)
destinations.forEach((destination, index) => {
    const changeDestinations = () => {
        const destinationImage = document.getElementById(`destinationImage`)
        const destinationName = document.getElementById(`destinationName`)
        const destinationDescription = document.getElementById(`destinationDescription`)
        const destinationDistance = document.getElementById(`destinationDistance`)
        const destinationTravel = document.getElementById(`destinationTravel`)
        const mars = document.getElementById(`mars`)
    
        fetch(`data.json`).then(request => {
            return request.json()
        }).then(data => {
            destinationImage.src = `${data.destinations[index].images.png}`
            destinationName.innerHTML = `${data.destinations[index].name}`
            destinationDescription.innerHTML = `${data.destinations[index].description}`
            destinationDistance.innerHTML = `${data.destinations[index].distance}`
            destinationTravel.innerHTML = `${data.destinations[index].travel}`
        })

        mars.classList.remove(`destinationStyle`)
        destination.classList.add(`destinationStyle`)
        if(initial) {
            initial.classList.remove(`destinationStyle`)
        }
        initial = destination
    }
    destination.addEventListener(`click`, changeDestinations)
})

const crews = document.querySelectorAll(`.crew`)
crews.forEach((crew, index) => {
    const changeCrews = () => {
        const crewImage = document.getElementById(`crewImage`)
        const crewRole = document.getElementById(`crewRole`)
        const crewName = document.getElementById(`crewName`)
        const crewBio = document.getElementById(`crewBio`)
        const last = document.getElementById(`last`)
    
        fetch(`data.json`).then(request => {
            return request.json()
        }).then(data => {
            crewImage.src = `${data.crew[index].images.png}`
            crewRole.innerHTML = `${data.crew[index].role}`
            crewName.innerHTML = `${data.crew[index].name}`
            crewBio.innerHTML = `${data.crew[index].bio}`
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

const technologies = document.querySelectorAll(`.technology`)
technologies.forEach((technology, index) => {
    const changeTechnologies = () => {
        const technologyImage = document.getElementById(`technologyImage`)
        const technologyName = document.getElementById(`technologyName`)
        const technologyDescription = document.getElementById(`technologyDescription`)
        const first = document.getElementById(`first`)
    
        fetch(`data.json`).then(request => {
            return request.json()
        }).then(data => {
            if(window.innerWidth < 1024) {
                technologyImage.src = `${data.technology[index].images.landscape}`
            }else {
                technologyImage.src = `${data.technology[index].images.portrait}`
            }
            technologyName.innerHTML = `${data.technology[index].name}`
            technologyDescription.innerHTML = `${data.technology[index].description}`
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