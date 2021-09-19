const burgerBtn = document.querySelector(".burger-button")
const burgerMenu = document.querySelector(".burger-menu")
const burgerLinks = document.querySelectorAll(".burger-link")
burgerBtn.addEventListener('click', () =>{
    burgerMenu.classList.toggle('expanded')
    for(i = 0; i<burgerLinks.length; i++) {
    burgerLinks[i].classList.toggle('expanded-link')
    burgerLinks[i].classList.toggle('contracted-link')
    }
    burgerBtn.classList.toggle('spin') 
   
})
