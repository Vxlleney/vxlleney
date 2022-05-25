// MENU
function toggleMenu2() {
    const navResponsive = document.querySelector('.nav-menu');

    if(navResponsive.classList.contains('active')) {
        navResponsive.classList.remove('active');
    } else {
        navResponsive.classList.add('active');
    }

}

function toggleMenu() {
    const navResponsive = document.querySelector('.nav-menu');

    if(navResponsive.classList.contains('active')) {
        navResponsive.classList.remove('active');
    } else {
        navResponsive.classList.add('active');
    }
}

function toggleTheme() {
    var styles = document.getElementById("theme_change");
    var nav = document.getElementById("nav_theme_change");
    
    if (styles.href.match("assets/css/dark_styles.css")) {
        styles.href = "assets/css/styles.css";    
    }
    else {
        styles.href = "assets/css/dark_styles.css";  
    }

    if (nav.href.match("assets/css/dark_nav-styles.css")) {
        nav.href = "assets/css/nav-styles.css";    
    }
    else {
        nav.href = "assets/css/dark_nav-styles.css";  
    }
}

