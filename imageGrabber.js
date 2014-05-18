$('#displayCase').html("<img src='default.jpg' alt='motivation' class='centeredImg'>");

setTimeout(function() {
	$('#displayCase').load('grabber.php?url='+ 'http://9gag.com/');
}, 3000);

(function loop() {
	var timeOut = Math.round(Math.random() * 14 * 60 * 1000) + 60000;
	setTimeout(function() {
		var audio = new Audio('notification.mp3');
		audio.play();
		$('#displayCase').load('grabber.php?url='+ 'http://9gag.com/');
		loop();
	}, timeOut);
}());

