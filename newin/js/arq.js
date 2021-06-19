window.onload=function(){ 

	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:1700,
		arrows:false,	
		centerMode: true,	
		prevArrow:$("#arrow-prev"),
		nextArrow:$("#arrow-next"),	
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
		prevArrow:$("#arrow-prev2"),
		nextArrow:$("#arrow-next2"),	
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
		prevArrow:$("#arrow-prev3"),
		nextArrow:$("#arrow-next3"),	
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

 