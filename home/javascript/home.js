// For changing Image in the slider
let carouselControlNextIcon = document.querySelector('.carousel-control-next-icon');
setInterval(() => {
    carouselControlNextIcon.click();
}, 6000);

// Content to be typed in the welcome section
let welcomeTyped = new Typed('#welcome-typingArea',{
    stringsElement:'#welcome-typingContent',
    backDelay:2000,    
    loop:true
})