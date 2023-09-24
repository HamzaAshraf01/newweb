// this code is copied form codepen to combine scroll trigger and locomotiv (puted in fuction)
function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init ()

// cursor move 
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20 +"px"
    crsr.style.top = dets.y + 20 +"px"
})

// starting animation
// gsap.from("#page1 h1,#page1 h2", {
//     y: 10,
//     rotate: 10,
//     opacity: 0,
//     delay: 0.3,
//     duration: 0.7
// })

var tl = gsap.timeline({
    scrollTrigger:{
        trigger : "#page1>h1" ,
        scroller: "#main" ,
        markers: false ,
        start : "top 27%" ,
        end : "top 0" ,
        scrub : 3 
    }

})

// "samesequence" variable is used to move all items sequenctionally according to markers 
tl.to("#page1>h1" ,{
    x: -100 ,
} ,"samesequence")

tl.to("#page1 h2" , {
    x: 100
}, "samesequence")

tl.to("#page1 video" , {
    width: "90%"
},"samesequence")
//page 2 start
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger : "#page1>h1" ,
        scroller: "#main" ,
        markers: false ,
        start : "top -120%" ,
        end : "top -130%" ,
        scrub : 3 
    }

})

tl2.to("#main" , {
    backgroundColor: "#fff"   
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger : "#page1>h1" ,
        scroller: "#main" ,
        markers: false ,
        start : "top -350%" ,
        end : "top -400%" ,
        scrub : 3 
    }

})

tl3.to("#main" , {
    backgroundColor: "#000"
})

// cursor into image cursor code

var client = document.querySelectorAll("#client-table")
client.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "450px"
        crsr.style.height = "450px"   
        crsr.style.backgroundImage = `url(${att})`
        // crsr.style.cursor = "initial" 

    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.width = "15px"
        crsr.style.height = "15px"
        crsr.style.backgroudImage = `none`
        

    })


})


// cursor body practice
// var cursor = document.querySelector("body",functio(){

// })