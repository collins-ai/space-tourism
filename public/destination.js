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

let initial

const destinations = document.querySelectorAll(`.destination`)
destinations.forEach((destination, index) => {
    const changeDestinations = () => {
        const image = document.getElementById(`image`)
        const name = document.getElementById(`name`)
        const description = document.getElementById(`description`)
        const distance = document.getElementById(`distance`)
        const travel = document.getElementById(`travel`)
        const mars = document.getElementById(`mars`)
    
        fetch(`data.json`).then(request => {
            return request.json()
        }).then(data => {
            image.src = `${data.destinations[index].images.png}`
            name.innerHTML = `${data.destinations[index].name}`
            description.innerHTML = `${data.destinations[index].description}`
            distance.innerHTML = `${data.destinations[index].distance}`
            travel.innerHTML = `${data.destinations[index].travel}`
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

const hamburgerButton = document.getElementById(`hamburger`)
const closeButton = document.getElementById(`close`)

const toggleNavigation = () => {
    const navigation = document.getElementById(`navigation`)
    navigation.classList.toggle(`toggleNavigation`)
    hamburgerButton.classList.toggle(`hideHamburger`)
}
hamburgerButton.addEventListener(`click`, toggleNavigation)
closeButton.addEventListener(`click`, toggleNavigation)