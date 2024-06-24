window.addEventListener("mousemove",function(details){
    gsap.to("#con",{
        left: details.clientX+'px',
        ease: Power3
    })
})