window.onload = function()
                {               
	$(function() {
		$("#accordion").accordion({
	        collapsible: true,
	        heightStyle: "content"
	    });
			});

	$('#titleInput').keyup(function(){

		var titleInput = $(this).val();
		$('#pageTitleOutput').html(titleInput);
	});

		$('#keywordsInput').keyup(function(){

		var keywordsInput = $(this).val();
		$('#keywordsOutput').html(keywordsInput);
	});

 };