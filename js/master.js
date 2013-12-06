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

	$('#titleInput').blur(function(){

		var titleInput = $(this).val();
		$('#pageTitleHeadingOutput').empty().append('&lt;h1&gt;',[titleInput],'&lt;/h1&gt;<br>');
	});

	$('#keywordsInput').keyup(function(){

		var keywordsInput = $(this).val();
		$('#keywordsOutput').html(keywordsInput);
	});

	$('#page1Input').blur(function(){

		var page1Input = $(this).val();
		$('#page1Output').empty().append('<p>&lt;li&gt; &lt;a href="',[page1Input], '.html"&gt;', [page1Input], '&lt;/a&gt;</p>&lt;/li&gt;</p>');
	});

	$('#page2Input').blur(function(){

		var page2Input = $(this).val();
		$('#page2Output').empty().append('<p>&lt;li&gt; &lt;a href="',[page2Input], '.html"&gt;',[page2Input], '&lt;/a&gt;</p>&lt;/li&gt;</p>');
	});

	$('#page3Input').blur(function(){

		var page3Input = $(this).val();
		$('#page3Output').empty().append('<p>&lt;li&gt; &lt;a href="',[page3Input],'.html"&gt;', [page3Input], '&lt;/a&gt;</p><p>&lt;/li&gt;</p>');
	});

	$('#article1TitleInput').blur(function(){

		var article1TitleInput = $(this).val();
		$('#article1TitleOutput').empty().append('&lt;article&gt;<br>&lt;h2&gt;',[article1TitleInput],'&lt;/h2&gt;');
	});

	$('#article1ContentInput').blur(function(){

		var article1ContentInput = $(this).val();
		$('#article1ContentOutput').empty().append('&lt;p&gt;',[article1ContentInput],'&lt;/p&gt;<br>&lt;/article&gt;');
	});

	$('#article2TitleInput').blur(function(){

		var article2TitleInput = $(this).val();
		$('#article2TitleOutput').empty().append('&lt;article&gt;<br>&lt;h2&gt;',[article2TitleInput],'&lt;/h2&gt;');
	});

	$('#article2ContentInput').blur(function(){

		var article2ContentInput = $(this).val();
		$('#article2ContentOutput').empty().append('&lt;p&gt;',[article2ContentInput],'&lt;/p&gt;<br>&lt;/article&gt;');
	});

/*** footer input ****/
	$('#creatorInput').blur(function(){

		var creatorInput = $(this).val();
		$('#creatorOutput').empty().append('Made by: ',[creatorInput], ' | ');
	});

	$('#emailInput').blur(function(){

		var emailInput = $(this).val();
		$('#emailOutput').empty().append('&lt;a href="mailto:',[emailInput],'?Subject=Website%20Contact"&gt;Email Us!&lt;/a&gt;');
	});

 };