const burger = document.querySelector('.burger')
const burgerContent = document.querySelector('.buurger_content')

burger.addEventListener('click', openBurger)
function openBurger(){
    burgerContent.classList.toggle('activeBurger')
}
