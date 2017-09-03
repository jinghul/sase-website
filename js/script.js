
function main(){
	var $arrow = $('#arrow-left');
	var $head = $('header.content-bar');
	var $vid = $(".ban-left.back");
	var $ban = $('.banner.ban-left');


	var moveBanner = function() {
		//icon
		var apos = '' + ($head.height() + $ban.height()/2 - $arrow.height()/2)+ "px";
		$arrow.hide().css('top', apos).fadeIn(300);
		var newIconSize = "" + ($head.width()/1903 * 170) + "px";
		var newBorder = "" + ($head.width()/1903 * 15) + 'px';
		$('img#main-logo').css('width', newIconSize).css('border-width', newBorder);

		//main
		var newVidHeight = "" + ($ban.height()/843.75 * 700) + "px";
		var newVidWidth = "" + ($('.main-box').width()/1903 * 1300) + "px";
		$('iframe#video').css('height', newVidHeight).css('width', newVidWidth);

		//members
		var imgHeight = $("#members tbody tr td").children('img').height();
		var ratio = imgHeight/380;

		var currImgHeight = '' + ($("#members tbody tr td").children('img').width() + 6) + 'px';
		var newBorderSize = "" + (ratio * 15) + "px 3px";
		var newAHeight = "" + (imgHeight + 10) + "px";
		var newPadTop = "" + (ratio * 20) + "px";
		var newFontSize = "" + (ratio * 1.5* 50) + "px";
		var newFontSize1 = "" + (ratio * 1.5 * 30) + "px";
		var newFontSize2 = "" + (ratio * 1.3 * 60) + "px";
		$("#members tbody tr td").children('article').css('height', newAHeight).css('width', currImgHeight).css('padding-top', newPadTop).css('border-width', newBorderSize);
		$("#members tbody tr td").children('article').children('h2').css('font-size', newFontSize);
		$("#members tbody tr td").children('article').children('h3').css('font-size', newFontSize1);
		//$("#members caption h1").css('font-size', newFontSize2);

	};


	var notFull = function() {
		if ($(window).width() < 1903){
			$ban.css('max-width', '100%');
			$('.main-box.main').css('background-position','0 -590px');
			$('.banner.ban-right').css('width', '525px').css('padding', '15px').css('margin-top','150px');
			$('#cal-cont').css('width', '100%').css('border', 'none');

			var vTop = '' + ($head.height() + $ban.height()/2 - ($vid.height()+20)/2) + "px";
			var vLeft = '' + ($('.main-box').width()/2 - $vid.width()/2) + "px";
			$vid.css('top', vTop).css('left', vLeft);

			$('#event-box').css('float', 'none');
			$('.list-title').css('margin-top', '40px');
		}
	};

	var isFull = function() {
		$("#members tbody tr td").children('article').stop(true, true);
		moveBanner();
		$("#members tbody tr td").children('article').hide();
		if (!($(window).width() < 1903)) {
			$ban.css('max-width', '1500px');
			$('.main-box.main').css('background-position','-410px 0');
			$('.banner.ban-right').css('width', '360px').css('padding', '10px');
			$vid.css('top', '190px').css('left', '125px');	
			$('iframe#video').css('height', '700px').css('width', '1300px');	
			$('#cal-cont').css('width', '1380px');	
			$('#event-box').css('float', 'left');
			$('.list-title').css('margin-top', '10%');
		}
	};	

	moveBanner();
	notFull();


	var numImages = 12;
	var srcs =[];


	var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
	if (lastPathSegment === 'gallery.html') {
		var path = 'img/featured/';

		for(var i=0; i < numImages; i++){
			$("#img-gallery").append("<img src=\'" + path + i + '.jpg' + "\' class=\'imgs\'>");
			srcs.push(path+ i + '.jpg');
		}
	}

	$(window).resize(function () {
		var apos = '' + ($head.height() + $ban.height()/2 - $arrow.height()/2)+ "px";
		$arrow.hide().css('top', apos).fadeIn(300);
		$("#members tbody tr td").children('article').hide().stop(true, true);
		moveBanner();
		if (!($(window).width() < 1903)) {
			$ban.css('max-width', '1500px');
			$('.main-box.main').css('background-position','-410px 0');
			$('.banner.ban-right').css('width', '360px').css('padding', '10px');
			$vid.css('top', '190px').css('left', '125px');	
			$('iframe#video').css('height', '700px').css('width', '1300px');	
			$('#cal-cont').css('width', '1380px').css('border-left', '10px solid white');	
			$('#event-box').css('float', 'left');
			$('.list-title').css('margin-top', '10%');
		}
		notFull();
	});

	$("#learn-more").click(function() {
		var $this = $(this);
		var $banr = $(".banner.ban-right");

		$this.toggleClass('More');
		$banr.css("display", "none");

		if ($this.hasClass('More')) {
			$banr.css("top", "100px");
			$("#right-text").text("The Society of Asian Scientists and Engineers (SASE) is a nonprofit professional organization founded in 2007 with the goal of providing Asian heritage scientists and engineers with opportunities for professional and personal advancement. The SASE community is made up of collegiate and professional members dedicated to celebrating diversity, reaching their full potential, and giving back to the community. Learn more at saseconnect.org");
			$('#title-intro').text("Who we are.");
			if($(window).width() < 1903){
				$('.main-box.main').css('background-position','0 -590px');
			}
		} else {
			$banr.css("top", "200px");
			$("#right-text").text("SASE helps Asian-heritage scientific and engineering professionals achieve their full potential through activities such as networking, panel discussions, company visits, and lectures. Our mission is to prepare our members for success in the global business world, celebrate diversity on campuses and in the workplace, and provide opportunities for members to make contributions to their local communities.");
			$('#title-intro').text("What we do.");
			if($(window).width() < 1903){
				$('.main-box.main').css('background-position','0 -590px');
			}
		}

		$banr.slideDown(500);
	});

	$("#arrow-left").click(function() {
		var $banl = $(".ban-left.front");
		var src1 = "img/icons/arrow-left.png";
		var src2 = "img/icons/arrow-right.png";
		
		
		if ($banl.hasClass('slideOutLeft')) {
			$banl.removeClass('animated slideOutLeft').show().addClass('animated slideInLeft');
			$("#arrow-change").hide().attr("src", src1).fadeIn(500);
		} else {
			$banl.removeClass('animated fadeInRight').addClass('animated slideOutLeft');
			$vid.show();
			$("#arrow-change").hide().attr("src", src2).fadeIn(500);
		}
		
	});


	$("#members tbody tr td").hover(function() {
		$(this).children('article').slideToggle(600);
	});

	var index = 0;
	var open = false;

	$(".switch").click(function () {
		if($(this).hasClass("left")) {
			index -= 1;
			index = (index < 0) ? srcs.length-1 : index;
			$("#images").hide().attr("src", srcs[index]).fadeIn(500); //.removeClass('animated jello').show().addClass('animated jello');
		} else if($(this).hasClass("right")) {
			index = (index + 1) % srcs.length;
			$("#images").hide().attr("src", srcs[index]).fadeIn(500);//.removeClass('animated jello').show().addClass('animated jello');
		} else {
			$('#img-gallery').slideToggle();
			open = !open;
			$(".down.switch img").hide().attr("src", (open) ? "img/icons/arrow-up.png" : "img/icons/arrow-down.png").fadeIn();
		}
	});


	$(document).on('click', '.imgs', function() {
		var source = $(this).attr('src');
		var text = '<h1>Image Title</h1><br><p>Caption with information about the picture.</p>';
		$('.zoom').remove();
		$('body').append("<section class=\'zoom zoom-cont flex\'><img src='" + source + "\' class=\'zoom\'><article>" + text + "</article></section>");
	});

	$(document).on('click', '.zoom', function() {
		$('.zoom').remove();
	});
};



$(window).on('load', main);


