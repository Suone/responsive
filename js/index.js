$(document).ready(function() {
	$('.btns .login2').mouseenter(function() {
		$(this).css({
			"border-bottom-right-radius": "0",
			"border-bottom-left-radius": "0"
		})
	});
	$('.btns .login2').mouseleave(function() {
		$(this).css({
			"border-bottom-right-radius": "18px",
			"border-bottom-left-radius": "18px"
		})
	})
	$.ajax({
		url: "text.json",
		type: "get",
		dataType: "json",
		success: function(result) {
			for(var i = 0; i < result.length; i++) {
				$li = $('<li>').attr("class", "box");
				$a1 = $('<a>').attr("href", "#");
				var $img1 = $("<img>").attr("src", result[i].img);
				$a1.append($img1);
				$info = $('<div>').attr("class", "info-main");
				$author = $('<span>').attr("class", "author");
				$authorPic = $("<img>").attr("src", result[i].authorPic);
				$authorTxt = $("<i>").text(result[i].authorTxt);
				$time = $('<span>').text(result[i].time).attr("class", "time");
				$author.append($authorPic).append($authorTxt);
				$info.append($author).append($time);
				$tt = $('<a>').text(result[i].tt).attr("class", "tt");
				$detail = $('<p>').text(result[i].detail).attr("class", "detail");
				$tags = $('<p>').attr("class", "tags");
				for(var j = 0; j < result[i].tag.length; j++) {
					$span = $("<span>").text(result[i].tag[j]);
					$tags.append($span);
				}
				$li.append($a1).append($info).append($tt).append($detail).append($tags);
				$('.article-list').append($li);
			}
		}
	});
	$(function() {
		var $container = $('#masonry');
		$container.imagesLoaded(function() {
			setMargin();
			$(window).resize(function() {
				setMargin();
			})

		});

		function setMargin() {
			if($(document).outerWidth(true) > 1024) {
				$container.masonry({
					itemSelector: '.box',
					gutter: 20,
					isAnimated: true,
				});
			} else if($(window).outerWidth(true) <= 1024 && $(window).outerWidth(true) > 400) {
				$container.masonry({
					itemSelector: '.box',
					gutter: 22,
					isAnimated: true,
				});
			}
		}
	});
	$('section').mouseenter(function() {
		$('.box>a>img').each(function() {
			var $width = $(this).width();
			var $height = $(this).height();
			$(this).on('mouseenter', function() {
				$(this).stop(true).animate({
					"width": $width * 1.1,
					"height": $height * 1.1,
					"left": -0.1 * $width / 2,
					"top": -0.1 * $height / 2
				}, 200)
			});
			$(this).on('mouseleave', function() {
				$(this).stop(true).animate({
					"width": $width,
					"height": $height,
					"left": 0,
					"top": 0
				}, 200)
			});
		});
	})

})