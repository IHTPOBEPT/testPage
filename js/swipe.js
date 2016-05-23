//Свайп мышкой
document.addEventListener('mousedown', mouseStart, false);        
document.addEventListener('mouseup', mouseMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function mouseStart(event) {                                         
    xDown = event.clientX;                                      
    yDown = event.clientY;                                      
};                                                

function mouseMove(event) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = event.clientX;                                    
    var yUp = event.clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 50 ) {
			document.querySelector(".page1").classList.remove("visible");
			document.querySelector(".page1").classList.add("hide");
			document.querySelector(".page2").classList.remove("hide");
			document.querySelector(".page2").classList.add("visible");
        } else if ( xDiff < -50 ){
			document.querySelector(".page2").classList.remove("visible");
			document.querySelector(".page2").classList.add("hide");
			document.querySelector(".page1").classList.remove("hide");
			document.querySelector(".page1").classList.add("visible");
        }                       
    } else {
        if ( yDiff > 0 ) {
        } else { 
        }                                                                 
    }
    xDown = null;
    yDown = null;                                             
};



//Свайп для тачскринов 
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);                                                       

function handleTouchStart(event) {                                         
    xDown = event.touches[0].clientX;                                      
    yDown = event.touches[0].clientY;                                      
};                                                

function handleTouchMove(event) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = event.touches[0].clientX;                                    
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            document.querySelector(".page1").classList.remove("visible");
			document.querySelector(".page1").classList.add("hide");
			document.querySelector(".page2").classList.remove("hide");
			document.querySelector(".page2").classList.add("visible"); 
        } else {
            document.querySelector(".page2").classList.remove("visible");
			document.querySelector(".page2").classList.add("hide");
			document.querySelector(".page1").classList.remove("hide");
			document.querySelector(".page1").classList.add("visible");
        }                       
    } else {
        if ( yDiff > 0 ) {
        } else { 
        }                                                                 
    }
    xDown = null;
    yDown = null;                                             
};

//переключение между страницами по индикаторам (на всякий случай)
var swipe1 = document.querySelector(".swipe");
var swipe2 = document.querySelector(".swipe2");
var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
swipe1.addEventListener("click",function() {
	page1.classList.remove("visible");
	page1.classList.add("hide");
	page2.classList.remove("hide");
	page2.classList.add("visible");
});

swipe2.addEventListener("click",function() {
	page2.classList.remove("visible");
	page2.classList.add("hide");
	page1.classList.remove("hide");
	page1.classList.add("visible");
});