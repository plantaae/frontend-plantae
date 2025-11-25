function menuMobile() {
    let mobileMenu = document.getElementById("mobileMenu");
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

mobileMenu.addEventListener('click', menuMobile);