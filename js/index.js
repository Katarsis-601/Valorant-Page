const btn_nav = document.getElementsByClassName("nav-btn")
const header = document.querySelector("header")
btn_nav[0].addEventListener("click", ev => {

    header.classList.add("header-animation")

})

