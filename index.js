const imgs=document.querySelectorAll('.header-slider ol img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');
const overlays=document.querySelector('.overlays');
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
const locationPopupWindow=document.querySelector('.location-overlay')
const locationNewPopup=document.querySelector('.location-popup-overlays-new')
function locationshow(){
    locationNewPopup.style.display='block'
    locationPopupWindow.style.display='block'
};
function locationhide(){
    locationNewPopup.style.display='none'
    locationPopupWindow.style.display='none'
};

const loginH1=document.querySelector('.login-h1');
const accountPopup=document.querySelector('.account-popup');
loginH1.addEventListener('mouseenter',()=>{
        accountPopup.style.display='block';
        overlays.style.display='block'
});
overlays.addEventListener('mouseenter',()=>{
        accountPopup.style.display='none';
        overlays.style.display='none'
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

const languageradiobutton=document.querySelector('.language-radio-buttons');
const languageclick=document.querySelector('.language');

languageclick.addEventListener('mouseenter',()=>{
    overlays.style.display='block';
    languageradiobutton.style.display='block';
});
overlays.addEventListener('mouseenter',()=>{
    overlays.style.display='none';
    languageradiobutton.style.display='none';
});


const prime=document.querySelector('.Prime');
const showprime=document.querySelector('.primeimg');

prime.addEventListener('mouseenter',()=>{
    showprime.style.display='block';
    overlays.style.display='block';
});

overlays.addEventListener('mouseenter',()=>{
    overlays.style.display='none';
    showprime.style.display='none';
});