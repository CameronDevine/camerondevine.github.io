$(document).ready(function() {
	$("slideshow").each(function() {
		var caption = $(this).find("cap").eq(0).html();
		var heading = $(this).attr("heading");
		if (heading !== undefined) {
			heading = "<h2>" + heading + "</h2>";
		} else {
			heading = "";
		}
		$(this).html(
			  heading
			+ "<img class=\"slideshow\" src=\""
			+ $(this).attr("source")
			+ "/1.jpg\">\n"
			+ "<div>\n"
			+ "<a class=\"slideshow\" href=\"#\" onclick=\"advance(this, -1); return false\">prev</a>"
			+ "<h3 class=\"slideshow\">" + caption + "</h3>\n"
			+ "<a class=\"slideshow\" href=\"#\" onclick=\"advance(this, 1); return false\">next</a>\n"
			+ "</div>"
			+ $(this).html());
	});
});

function advance(location, diff) {
	var slideshow = $(location).closest("slideshow")
	var image = slideshow.find("img");
	var index = image.attr("src").split("/")[1].split(".")[0];
	index = parseInt(index) + diff;
	if (index <= slideshow.find("cap").length && index > 0) {
		var caption = slideshow.find("cap").eq(index - 1).html();
		image.attr("src", slideshow.attr("source") + "/" + index + ".jpg");
		slideshow.find("h3").html(caption);
	}
}
