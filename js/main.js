

// First Slidder

$('.slidder-one')

.not('.slick-initialized')
.slick({
    autoplay :true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow : ".site-slidder .slidder-btn .prev",
    nextArrow : ".site-slidder .slidder-btn .next"
})

// Second  Slidder

$('.slidder-two')

.not('.slick-initialized')
.slick({
   
    prevArrow : ".site-slidder-two .prev",
    nextArrow : ".site-slidder-two .next",
    autoplay :3000,
    slidesToShow :3,
    slidesToScroll :1
  
});