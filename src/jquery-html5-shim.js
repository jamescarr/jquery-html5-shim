(function(){
        function create_elements(){
            var html5_elements = ['section', 'article', 'm', 'header', 'footer', 'nav'];
            for (var i in html5_elements){
               var el =  document.createElement(html_elements[i]);
            }
        };
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
                create_elements();
	};
})();

