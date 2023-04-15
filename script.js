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



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var page1 = document.querySelector(".page1")
var i = document.querySelector("#over i")
page1.addEventListener("mousemove", function (dets) {
    i.style.left = (dets.clientX - 34) + 'px'
    i.style.top = (dets.clientY - 115) + 'px'

})

var flag =0
document.querySelector(".page1").addEventListener("click",function(){
    if(flag ===0 ){

        document.querySelector("#over").style.transform = `rotateY(180deg) translateX(-50px)`
        document.querySelector(".page1 video").style.display = `block`
flag = 1
    }
else{
    document.querySelector("#over").style.transform = `rotateY(0deg) translateX(1px)`
    document.querySelector(".page1 video").style.display = `none`

    flag = 0 
}
})



gsap.to("#over h1",{
    y:100,
    
    opacity:1,
   
    scrollTrigger:{
        trigger:".page1",
        scroller:"#main",
        start:"top 0%",
        scrub:true,
        // markers:true
    }
})

gsap.to(".page2 h1",{
    y:-150,
    // opacity:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        start:"top 30%",
        scrub:true,
        // markers:true
    }
})
gsap.to(".page2 #centerimg",{
    y:100,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        start:"top 40%",
        scrub:true,
        // markers:true
    }
})
gsap.to(".page2 #leftimg",{
    y:-100,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        start:"top 10%",
        scrub:true,
        // markers:true
    }
})
gsap.to(".page2 #rightimg",{
    y:-100,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        start:"top 30%",
        scrub:true,
        // markers:true
    }
})

gsap.to(".page3 h1",{
    y:-150,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"#main",
        start:"top 40%",
        scrub:true,
        // markers:true
    }
})



gsap.to(".page5 h1",{
    y:-150,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:"#main",
        start:"top 40%",
        scrub:true,
        // markers:true
    }
})
gsap.to(".page5 #limage",{
    y:110,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:"#main",
        start:"top 40%",
        scrub:true,
        // markers:true
    }
})

gsap.to(".page5 #rtopimg",{
    y:-110,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:"#main",
        start:"top 45%",
        scrub:true,
        // markers:true
    }
})
gsap.to(".page5 #btmimg",{
    y:-110,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:"#main",
        start:"top 30%",
        scrub:true,
        // markers:true
    }
})
gsap.to(".page6 img",{
    y:-150,
    // opacity:1,
    // scale:1,
    scrollTrigger:{
        trigger:".page6",
        scroller:"#main",
        start:"top 50%",
        scrub:true,
        // markers:true
    }
})