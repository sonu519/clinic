var callB = document.getElementById('call-b');
var watsappB = document.getElementById('watsapp-b');
var view = 0;

var scroll = new LocomotiveScroll({
  el:document.querySelector('[data-scroll-container]'),
  smooth:true,
  mobile: {
    smooth:true
  },
  tablet: {
    smooth:true
  }
})

function ctaDone(){
  if(view == 0){
    callB.style.transform = 'translateX(-75px)';
    watsappB.style.transform = 'translateY(-65px)';
    view = 1;
  }else{
    callB.style.transform = 'translateX(0px)';
    watsappB.style.transform = 'translateY(0px)';
    view = 0;
  }
}

/*function navanimation(){
  var navtl = gsap.timeline()
  navtl.from("#nav .logo-name svg,a",{
    y:-30,
    duration:0.8,
    opacity:0,
    stagger:0.2
  })

  navtl.from("#hero-sec #mh-text h1",{
    x:-300,
    duration:0.6,
    opacity:0,
    delay:-0.5
  })

  navtl.from("#hero-sec #mh-text p",{
    x:-100,
    duration:0.6,
    opacity:0,
    delay:-0.5
  })
}
navanimation()

var pagestl = gsap.timeline()
pagestl.from("#abt-us #abt-con",{
  y:-300,
  duration:1,
  opacity:0,
})
*/
