$(document).ready(function(){

	$("#more").click(function(){
  		$("#more").toggleClass("open");
  		$("#more h1").text(function(h1, text) {
			return text === "Hide diary" ? "Diary" : "Hide diary";
		});
	});

});