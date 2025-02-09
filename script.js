
// mengaktifkan humburger menu
const navbarNav = document.querySelector ('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

document.querySelector ('#hamburger-menu').onclick= () => {
    navbarNav.classList.toggle('active');
};
// slider produck
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".content-product")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart =false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 50;  //untuk menggeser .content-product 50px 


arrowIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
        if(icon.id == "left"){ //saat icon dgn id left click
            carousel.scrollLeft -= firstImgWidth; 
        } else{
            carousel.scrollLeft += firstImgWidth;
        }
    });
});

