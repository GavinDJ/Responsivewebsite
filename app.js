const selector = document.querySelectorAll(".nav__ul-li")
const ul = document.querySelector(".nav__ul")
const nav = document.querySelector(".hamburger")


for(let i = 0; i < selector.length; i++){
    selector[i].onclick = function(){

    ul.querySelector(".nav__ul-li-active").classList.remove("nav__ul-li-active")

    this.classList.add("nav__ul-li-active")
  }
}
