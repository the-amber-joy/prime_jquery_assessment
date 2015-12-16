var clickCount = 0

$(document).ready(function() {
	$('body').on('click', '.generate', buildContainer);
	$('body').on('click', '.generate', countClicks);
	$('body').on('click', '.change', changeColor);
	$('body').on('click', '.delete', deleteRow);
});


function buildContainer(){
	$el = $(this).parent()
	$el.append('<div class="container">' + 
		'<button class="delete">delete</button><br><p>' + 
		clickCount + 
		'<br><button class="change">change</change>' + 
		'</div>');
}


function countClicks(){
	clickCount++
}


function changeColor(){
	$(this).closest('.container').toggleClass('red');
}


function deleteRow(){
	$(this).parent().remove();
}
