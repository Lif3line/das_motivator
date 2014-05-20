$('#displayCase').html("<img src='default.jpg' alt='motivation' class='centeredImg'>");

$('#pauseButton').hide();
setTimeout(function() { // Initial Load (no noise)
	$('#displayCase').load('grabber.php?url='+ 'http://9gag.com/', function() {
		$('#pauseButton').show();
	});
}, 3000);

/* Set up pause button with knowledge that it is not paused */
pauseButton.addEventListener('click', function() {pauseToggle()});
$('#pauseButton').data("paused", false);

var timeOut = Math.round(Math.random() * 14 * 60 * 1000) + 60000;
timer = new timer(function() {
	var audio = new Audio('notification.mp3');
	audio.play();
	$('#displayCase').load('grabber.php?url='+ 'http://9gag.com/');
	timer.updateTimeOut(Math.round(Math.random() * 14 * 60 * 1000) + 60000);
}, timeOut);

function pauseToggle() {
	if($('#pauseButton').data("paused")) {
		$('#pauseButton').text("Pause");
		$('#pauseButton').data("paused",false);
		timer.start();
	} else {
		$('#pauseButton').text("Un-Pause");
		$('#pauseButton').data("paused",true);
		timer.pause();
	}
}

/* Custom pausable timer :D */
function timer(callback, timeOut) {
	var store, timeStarted; // Use store for holding data to allow clearTimeout
	var remaining = timeOut;

	this.start = function() {
		timeStarted = new Date();
		store = setTimeout(callback, remaining);
	}

	this.pause = function() {
		clearTimeout(store);
		remaining -= new Date() - timeStarted;
	}

	this.updateTimeOut = function(newTimeOut){
		clearTimeout(store);
		store = setTimeout(callback, newTimeOut);
	}

	this.start()
}
