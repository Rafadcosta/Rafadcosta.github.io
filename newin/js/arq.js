window.onload=function(){ 

	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:1700,
		arrows:false,	
		centerMode: true,	
		dots: false,
		centerPadding:'-150px',
		slidesToShow:3,
		slidesToScroll:1,
		responsive: [
		{
			breakpoint: 640,
			settings: {
			slidesToShow: 1
			}
		}
		]
	});

	$('.slider2').slick({
		autoplay:true,
		autoplaySpeed:1700,
		arrows:false,	
		centerMode: true,	
		dots: false,
		centerPadding:'-150px',
		slidesToShow:3,
		slidesToScroll:1,
		responsive: [
		{
			breakpoint: 640,
			settings: {
			slidesToShow: 1
			}
		}
		]
	});

	$('.slider3').slick({
		autoplay:true,
		autoplaySpeed:1700,
		arrows:false,	
		centerMode: true,	
		dots: false,
		centerPadding:'-150px',
		slidesToShow:3,
		slidesToScroll:1,
		responsive: [
		{
			breakpoint: 640,
			settings: {
			slidesToShow: 1
			}
		}
		]
	});

  };

 