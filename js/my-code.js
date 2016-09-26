$(document).ready(function() {
	
	$("p").hide();
	$("Varus").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});
	
	/* start of jq02 how to use butons and selectors */
	
	$("#testbutton").click(function() {
		/*$("#jq02").css("background-color","#FF0000"); */
		$("strong").css("background-color","#FF0000");
	});

});