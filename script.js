const burgerBtn = document.querySelector(".burger-button")
const burgerMenu = document.querySelector(".burger-menu")
burgerBtn.addEventListener('click', () =>{
    burgerMenu.classList.toggle('expanded') 
    burgerBtn.classList.toggle('spin') 
   
})
