var callB = document.getElementById('call-b');
var watsappB = document.getElementById('watsapp-b');
var view = 0;

var scroll = new LocomotiveScroll({
  el:document.querySelector('[data-scroll-container]'),
  smooth:true
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