//check off specific dos by clicking
//.click will only affecting that already exists
//inside the ul, .on click is specify the li that exists inside ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(event){
	//fade out then remove the li
	//.parent() will retrieve li that the specific span is inside of that li
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//prevents from other elements in html to stop going the click event bubling
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//retrieve text from input
		var todoText = $(this).val();
		$(this).val("");
		//add the variable into li by append()
		$("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
	}
});

$(".fi-cwsuxl-plus-solid").click(function(){
	$("input[type='text']").fadeToggle();
});