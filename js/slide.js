
$('.hotels').slick({
    infinite: true, 
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerPadding: '40px',
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:true,
          centerPadding: '40px',
        }
      },
    
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  
  