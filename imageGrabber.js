$('#displayCase').html("<img src='default.jpg' alt='motivation' class='centeredImg'>");

setTimeout(function() {
	$('#displayCase').load('grabber.php?url='+ 'http://9gag.com/');
}, 3000);

(function loop() {
	var timeOut = Math.round(Math.random() * 15 * 60 * 1000);
	setTimeout(function() {
		$('#displayCase').load('grabber.php?url='+ 'http://9gag.com/');
		loop();
	}, timeOut);
}());

