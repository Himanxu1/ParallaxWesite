let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();



// timeline
// .to(".text",5,{x: 500}).to(".content-image",2,{opacity: 0}, '-=5')

// timeline.fromTo(".text", {opacity: 0},{opacity: 1 , duration : 6})

timeline
     .to('.rock',3,{y : -300})
     .to('.girl',3,{y: -200},'-=3')
     .fromTo('.bg1',{y: -50},{y : 0, duration : 3},'-=3')
     .to('.content',3,{top : '0%'},'-=3')
     .to('.main-title',3,{x: -400},'-=3')
    .fromTo('.content-image',{opacity: 0},{opacity: 1, duration : 1}) 
    .fromTo('.text',{opacity: 0},{opacity: 1, duration: 1})
    


let scene = new ScrollMagic.Scene({
    triggerElement : "section",
    duration : "100%",
    triggerHook : 0,
})     
   .setTween(timeline)
   .setPin("section")
   .addTo(controller)