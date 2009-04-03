(function(){

	function decorate_placeholder(){
	$('input').each(function(){
		var input = $(this);
		if(input.attr('placeholder') != ''){
			var text = input.attr('placeholder');
			if(input.val() == '')
				input.val(text);
			input.focus(function(){
				if(input.val() == text)
					input.val('');
			}).blur(function(){
				if(input.val() == '')
					input.val(text);
			});
		}
	});
	};
	$.html5 = function(){
		decorate_placeholder();
	};
})();

