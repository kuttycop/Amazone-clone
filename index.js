// let index = 0;
// function showSlide(n) {
//     const slides = document.querySelector('.slides');
//     if (n >= slides.children.length) index = 0;
//     if (n < 0) index = slides.children.length - 1;
//     slides.style.transform = `translateX(${-index * 100}%)`;
// }
// // Optional: Auto-slide functionality
// setInterval(() => {
//     index++;
//     showSlide(index);
// }, 10000);
// showSlide(index);
const imgs=document.querySelectorAll('.header-slider ol img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');

let n=0;

function changeslide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
};
changeslide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeslide();
});
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeslide();
});
// const scrollbarevent=document.querySelectorAll(".slider");
// for (const item of scrollbarevent) {
//     item.addEventListener('wheel',(evt)=>{
//         evt.preventDefault();
//         item.scrollLeft += evt.deltaY;
//     });
// }

const index=document.querySelector('.All-popup');
const border=document.querySelector('.nav-search-catagory');
let show=0;
function Allpopup(){
    if(show==1){
        index.style.display='block';
        border.style.border='3px solid chocolate';
        show=0;
    }else{
        index.style.display='none';
        border.style.border='none';
        show=1;
    }
};

const locationPopupOverlay=document.querySelector('.location-popup');
const locationPopupWindow=document.querySelector('.location-overlay')

function locationshow(){
    locationPopupOverlay.style.display='block'
    locationPopupWindow.style.display='block'
};
function locationhide(){
    locationPopupOverlay.style.display='none'
    locationPopupWindow.style.display='none'
};

const loginH1=document.querySelector('.login-h1');
const accountPopup=document.querySelector('.account-popup');
const accountPopupOverlay=document.querySelector('.account-popup-overlay');
loginH1.addEventListener('mouseenter',()=>{
        accountPopup.style.display='block';
        accountPopupOverlay.style.display='block'
});
accountPopupOverlay.addEventListener('mouseenter',()=>{
        accountPopup.style.display='none';
        accountPopupOverlay.style.display='none'
});

const sideIcon=document.querySelector('.side-icon');
const sideNavOverlay=document.querySelector('.side-nav-overlay');
const sideNavLogo=document.querySelector('.side-nav-logo');
const sideNavBars=document.querySelector('.side-nav-bars');
const sideNavXmark=document.querySelector('.side-nav-xmark')

sideIcon.addEventListener('click',function(){
    sideNavOverlay.style.display='block';
    sideNavLogo.style.left='0%';
    sideNavBars.style.left='0%';
    sideNavXmark.style.left='50%'
});
sideNavXmark.addEventListener('click',function(){
    sideNavOverlay.style.display='none';
    sideNavLogo.style.left='-60%';
    sideNavBars.style.left='-60%';
    sideNavXmark.style.left='-60%'
});

const languagepopupoverlay=document.querySelector('.language-popup-overlay');
const languageradiobutton=document.querySelector('.language-radio-buttons');
const languageclick=document.querySelector('.language');

languageclick.addEventListener('mouseenter',()=>{
    languagepopupoverlay.style.display='block';
    languageradiobutton.style.display='block';
});
languagepopupoverlay.addEventListener('mouseenter',()=>{
    languagepopupoverlay.style.display='none';
    languageradiobutton.style.display='none';
});


const prime=document.querySelector('.Prime');
const showprime=document.querySelector('.primeimg');

prime.addEventListener('mouseenter',()=>{
    showprime.style.display='block';
    languagepopupoverlay.style.display='block';
});

languagepopupoverlay.addEventListener('mouseenter',()=>{
    languagepopupoverlay.style.display='none';
    showprime.style.display='none';
});











