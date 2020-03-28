AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 3000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
  
  });


$(function(){

  $('.photo__slider').slick({
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true
    
  });


  // scroll

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId=$(this).data("scroll");
    let elementoffset=$(elementId).offset().top;
    
    $("html, body").animate({
        scrollTop: elementoffset -10
    },1000);
} );


// modal

let modalCall = $("[data-modal]");
let modalClose = $("[data-close]");

modalCall.on("click", function(event){
  event.preventDefault();
  let $this = $(this);
  let modalId = $this.data('modal');
  $(modalId).addClass('show');
  $("body").addClass("no-scroll");
 
});

modalClose.on("click", function(event){
  event.preventDefault();
  let $this = $(this);
  let modalParent = $this.parents('.modal');
  modalParent.removeClass('show');
  $("body").removeClass("no-scroll");
  
});

$(".modal").on("click", function(event){
  $(this).removeClass('show');
  $("body").removeClass("no-scroll");
  
});

$(".modal__dialog").on("click", function(event){
  event.stopPropagation();
  
});


});
