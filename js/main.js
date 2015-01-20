$(function() {
	// Animate scroll for header links.
	$('a', '#lineup').on('click', function (e) {
		var animating;
		e.preventDefault();

		if (animating) return;
		var id = $(e.currentTarget).attr('href').match(/#.+/)[0];
		animating = true;

		$('html,body').stop().animate({scrollTop: $(id).offset().top}, 300, function() {
			animating = false;
		});
	});

	// Back to top.
	$('.back', '#footer').on('click', function (e) {
		e.preventDefault();
		var id = $(e.currentTarget).attr('href').match(/#.+/)[0];
		$('html,body').stop().animate({scrollTop: $(id).offset().top}, 300, function() {});
	});

	// Open / collapse readmore.
	$('.read-more').click(function (e) {
		e.preventDefault();
		var $el = $(e.currentTarget);

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

