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

const hamburgerButton = document.getElementById(`hamburger`)
const closeButton = document.getElementById(`close`)

const toggleNavigation = () => {
    const navigation = document.getElementById(`navigation`)
    navigation.classList.toggle(`toggleNavigation`)
    hamburgerButton.classList.toggle(`hideHamburger`)
}
hamburgerButton.addEventListener(`click`, toggleNavigation)
closeButton.addEventListener(`click`, toggleNavigation)