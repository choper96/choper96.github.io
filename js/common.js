

$(function() {

	var clock;
	clock = $(".clock").FlipClock({
		clockFace : "DailyCounter",
		autoStart : false,
		callbacks : {
			stop : function() {
				$(".message").html("START ICO");
			}
		}


	});

	var dt = "February 2 2018 18:00:00";
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /=1000;

	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
