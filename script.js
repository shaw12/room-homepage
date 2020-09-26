var slideIndex = 1;
showSlides(slideIndex);
window.onresize = function(){ location.reload(); }
function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    if (window.matchMedia("(max-width: 768px)").matches) {
        /* The viewport is less than, or equal to, 700 pixels wide */
        var imgs = document.getElementsByClassName("mobile-img");
        var imgSmall = imgs;
      } else {
        /* The viewport is greater than 700 pixels wide */
        var imgs = document.getElementsByClassName("desk-img");
        var imgBig = imgs;
      }
    
    var desc = document.getElementsByClassName('hero__desc');

    if (n > imgs.length) {slideIndex = 1}
    if (n < 1) {slideIndex = imgs.length}
    for (i = 0; i < imgs.length; i++) {   
         
        imgs[i].style.display = "none";
        desc[i].style.display = "none";
    }
    // if (window.matchMedia("(max-width: 768px)").matches){
    //     imgSmall[slideIndex-1].style.display = "block";
    //     //imgBig[i].style.display = "none";
    // } else{
    //     imgBig[slideIndex-1].style.display = "block";
    //     //imgSmall[i].style.display = "none";
    // }

    imgs[slideIndex-1].style.display = "block";
    desc[slideIndex-1].style.display = "block";
}