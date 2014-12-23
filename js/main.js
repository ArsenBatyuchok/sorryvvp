$(function () {
	var offset = 30;
	var putinLastDay = new Date(2015, 0, 1, 0, -offset);
	$('#putinCountdown').countdown({until: $.countdown.UTCDate(+3, putinLastDay), padZeroes: true});
});