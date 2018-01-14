function makeTimer() {

			var endTime = new Date("2 February 2018 18:00:00 GMT+0:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  


			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
			
			if (seconds > "58") {$("#item_border3").addClass('timer_anim') }
			if (seconds < "5") {$("#item_border3").removeClass('timer_anim') }
			if (minutes > "58") {$("#item_border2").addClass('timer_anim') }
			if (minutes < "3") {$("#item_border2").removeClass('timer_anim') }
			if (hours > "22") {$("#item_border1").addClass('timer_anim') }
			if (hours < "21") {$("#item_border1").removeClass('timer_anim') }
	}


	setInterval(function() { makeTimer(); }, 1000);