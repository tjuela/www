$(document).ready(function() {
	$('li').mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
		console.log("mouse enter");
	});
	$('li').mouseleave(function() {
		$(this).fadeTo('fast', 1);
		console.log("mouse leave");
	});
});