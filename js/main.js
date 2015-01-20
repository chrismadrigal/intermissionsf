$(function() {
	$('.read-more').click(function (e) {
		e.preventDefault();
		$el = $(e.currentTarget);

		// Toggle open class on click.
		$el.siblings('.more').toggleClass('open');
		
		// Toggle message
        if ($el.data('open') == true) {
          $el.html('Read Full Bio').data("open", false);
        }
        else {
          $el.html('Collapse Bio').data("open", true);
        }
		
	});
});

