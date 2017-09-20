console.log("starting...");
var xml;

$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "lolcatz.xml",
		dataType: "xml",
		success: xmlParser
	});
	
});

function xmlParser(data) {
	xml = data;

	$(xml).find("kitteh").each(function () {
		kitteh = $(this);
		var name = $(kitteh).find("name").text();
		var src = $(kitteh).find("url").text();
		var kitId = $(kitteh).find("id").text();
		var back = '<br><a class="ui-btn" href="back" data-rel="back">go back</a>';

		// console.log(name);


		$("#myList").append('<li><a href="#' + kitId +'">' + name + '</a></li>');
		$("#parentDiv").append('<div data-role="page" id="' + kitId + '">' +
			'<div data-role="content"><img src="' + src + '">' + back + '</div>' +
'<div data-role="footer">' + 
	'<h1>Footer for page ' + name + '</h1>' +  
	'</div>' +

			'</div>');
	});
}