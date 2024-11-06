const menuButton = document.querySelector(".m-menu");
const open = document.getElementById(".menu"); 
const menu = document.querySelector(".menu");
menuButton.addEventListener("click", () =>{
    menu.classList.toggle(".is-open");
    menu.style.setProperty("display", "block");
})