const toggle = document.querySelector('.nav-toggle')
const exit = document.querySelector(".exit")
const menu =document.querySelector(".hidden-menu")
const a_moon = document.querySelector('#moon')
const a_sun = document.querySelector('#sun')
const night = document.querySelector('.night')
const i_moon = document.querySelector('.moon')
const i_sun = document.querySelector('.sun')
const hidden_m =document.querySelector('.back-menu')


t = true;
night.addEventListener("click", ()=>{
    if(t){
    t=false;
    document.querySelector('#change').setAttribute('href','assets/css/style-dark.css')
    i_moon.style.display = "none"
    i_sun.style.display = "block"
    
    }
    else{
        t=true;
        document.querySelector('#change').setAttribute('href','assets/css/style.css')
        i_sun.style.display = "none"
        i_moon.style.display = "block"

        
        
        }
    

})
// Menuni ochish va yopish

toggle.addEventListener('click' , function(){
    menu.classList.add("hide")
   hidden_m.classList.add("hide")
})
exit.addEventListener('click' , function(){
    menu.classList.remove("hide")
    hidden_m.classList.remove("hide")
    menu.style.transition = ".5s"
    hidden_m.style.transition = ".2s"
})
hidden_m.addEventListener('click', ()=>{
    menu.classList.remove("hide")
    hidden_m.classList.remove("hide")
    menu.style.transition = ".5s"
    hidden_m.style.transition = ".2s"
})

let loader = document.querySelector('.preloader')
window.addEventListener("load",()=>{
    loader.style.display = "none"
})