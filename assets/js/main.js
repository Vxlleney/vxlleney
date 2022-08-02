// DARK AND LIGHT THEME
const themeButton = document.getElementById('theme_change')
const themeSelector = localStorage.getItem('theme');

    if (themeSelector == 'dark'){
        themeButton.href = "assets/css/dark_styles.css";  
    }

    else {
        themeButton.href = "assets/css/styles.css";  
    }

function toggleTheme() {

    localStorage.removeItem('theme');

    if (themeButton.href.match("assets/css/dark_styles.css")) {
        themeButton.href = "assets/css/styles.css";  

        localStorage.setItem('theme', 'light');  
    }

    else {
        themeButton.href = "assets/css/dark_styles.css";  

        localStorage.setItem('theme', 'dark');  
    }
}




// MENU RESPONSIVE
const navResponsive = document.querySelector('.nav-menu');

function toggleMenu() {

    if(navResponsive.classList.contains('active')) {
        navResponsive.classList.remove('active');
    } else {
        navResponsive.classList.add('active');
    }
}




// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// LOADEr

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

