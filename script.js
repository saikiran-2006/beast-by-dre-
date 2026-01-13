// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling with Lenis
const lenis = new Lenis({
  duration: 1.2,       // smooth scrolling speed (lower = faster)
  smooth: true,
  smoothTouch: false,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// RAF (essential for Lenis smooth scroll)
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



var tlc = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        start:"top top",
        end:"50% 0%",
        // markers:true,
        pin:true,
        scrub:true
    }
})

tlc.to("#cards",{
    x:-1000
})


function card2(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        start:"top 50%",
        end:"100% 10%",
        scrub:true,
        
    }
})

tl2.to("#cards2",{
    x:-400,
    duration:1
})
}
card2()


function social(){
    gsap.from("#social i",{
    y:-100,
    stagger:0.2,
    repeat:-1,
    yoyo:true,
    delay:0.5,
    duration:2,
    ease:"bounce"
})
}
social()


function logo(){
    var tl4 = gsap.timeline(
{
    repeat:-1,
    ease:"bounce",
    duration:0.6,
    yoyo:true
}
)

tl4.to("#nav-logo",{
    y:-10,
})
tl4.to("#nav-logo",{
    y:10,
})

}
logo()


function videotext(){
    
gsap.from("#p > *",{
    y:200,
    opacity:0,
    delay:1.8,
    stagger:0.2,
    duration:0.9,
    ease:"power2.out"
})
}
videotext()


function navlinks(){
    gsap.from("#nav-links > *, #nav-icon",{
    y:-30,
    stagger:0.3,
    opacity:0,
    ease:"linear",
})
}
navlinks()





function page2(){
    var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        // markers:true,
        start:"0% 70%",
        end:"80% 70%",
        scrub:true,
        stagger:0.3,
        ease:"linear"
    }
})
tl5.from("#page2",{
    opacity:0
})
}
page2()


function page3(){
    var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        // markers:true,
        start:"0% 70%",
        end:"30% 30%",
        scrub:true,
        stagger:0.3,
        ease:"linear"
    }
})
tl5.from("#page3",{
    opacity:0.2
})
}
page3()
