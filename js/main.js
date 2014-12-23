$(function () {
	var putinLastDay = new Date();
	putinLastDay = new Date(putinLastDay.getFullYear() + 1, 1 - 1, 1);
	$('#putinCountdown').countdown({until: putinLastDay, padZeroes: true});
});