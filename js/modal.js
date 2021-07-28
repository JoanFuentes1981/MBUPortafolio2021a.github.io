document.querySelectorAll(".portafolio-modal img").forEach(el=>{el.addEventListener("click",function(ev){
ev.stopPropagation();
this.parentNode.classList.add("active");
    })
})

document.querySelectorAll(".portafolio-modal img").forEach(el=>{el.addEventListener("click",function(ev){
this.classList.remove("active");
    })
})