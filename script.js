window.addEventListener("mousemove",function(details){
    let val = gsap.utils.mapRange(0,window.innerWidth,100,window.innerWidth-100,details.clientX)
    gsap.to("#con",{
        left: val+'px',
        ease: Power3
    })
})