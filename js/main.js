let icon=document.querySelector(".bars");
let navSide=document.querySelector(".navSide")
icon.addEventListener("click", function(){
     navSide.classList.toggle("mobile")
})
let header=document.querySelector(".header");
window.onscroll=function(){
    if(window.scrollY>50){
        header.classList.add("header-active");

    }
    else{
        header.classList.remove("header-active");
    }
}

let toTop=document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active")
    }
    else{
        toTop.classList.remove("active")
    }
})
