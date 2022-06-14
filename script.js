// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos < currentScrollPos) {
//         document.getElementById("navbar").style.opacity = "1";
//     } else {
//         document.getElementById("navbar").style.opacity = "0";
//     }
//     prevScrollpos = currentScrollPos;
// }


let scrollPos = 0;
const nav = document.getElementById("navbar");

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        // Scrolling UP
        nav.classList.add('is-visible');
        nav.classList.remove('is-hidden');
    } else {
        // Scrolling DOWN
        nav.classList.add('is-hidden');
        nav.classList.remove('is-visible');
    }
    scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);




const popupButton = document.getElementById("toggle")
const overlay = document.getElementById("ovrly");
popupButton.onclick = function () {
    overlay.classList.add('active');
}

const tgleClose = document.getElementById('tgleClose');
tgleClose.onclick = function () {
    overlay.classList.remove('active');
}