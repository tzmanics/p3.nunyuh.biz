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

	$('#page1Input').blur(function(){

		var page1Input = $(this).val();
		$('#page1Output').append('<p>&lt;li&gt; &lt;a href="',[page1Input], '.html"&gt;', [page1Input], '&lt;/a&gt;</p>&lt;/li&gt;</p>');
	});

	$('#page2Input').blur(function(){

		var page2Input = $(this).val();
		$('#page2Output').append('<p>&lt;li&gt; &lt;a href="',[page2Input], '.html"&gt;', [page2Input], '&lt;/a&gt;</p>&lt;/li&gt;</p>');
	});

	$('#page3Input').blur(function(){

		var page3Input = $(this).val();
		$('#page3Output').append('<p>&lt;li&gt; &lt;a href="',[page3Input],'.html"&gt;', [page3Input], '&lt;/a&gt;</p><p>&lt;/li&gt;</p>');
	});

	$('#article1TitleInput').blur(function(){

		var article1TitleInput = $(this).val();
		$('#article1Output').append('&lt;article&gt;<br>&lt;h1&gt;',[article1TitleInput],'&lt;/h1&gt;');
	});

	$('#article1ContentInput').blur(function(){

		var article1ContentInput = $(this).val();
		$('#article1Output').append('<br>&lt;p&gt;',[article1ContentInput],'&lt;/p&gt;<br>&lt;/article&gt;');
	});

 };