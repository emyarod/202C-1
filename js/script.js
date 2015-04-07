// // Normal Clicks
// $(function() {
//   $('.toggle-nav').click(function() {
//     $('body').toggleClass('show-nav');
//      return false;
//   });
  
// });


// // Toggle with hitting of ESC
// $(document).keyup(function(e) {
//     if (e.keyCode == 27) {
//    $('body').toggleClass('show-nav');
//   }
// });

$('body').scrollspy({
  target: '.bs-docs-sidebar',
  offset: 40
});

$("#nav ul li a[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 300, function(){
		// when done, add hash to url
  	// (default click behaviour)
  	window.location.hash = hash;
	});
});

$('.easy-sidebar-toggle').click(function(e) {
  e.preventDefault();
  $('.easy-sidebar-container').toggleClass('toggled');
  $('.navbar.easy-sidebar').toggleClass('toggled');
});
$('html').on('swiperight', function(){
  $('.easy-sidebar-container').addClass('toggled');
  $('.navbar.easy-sidebar').addClass('toggled');
});
$('html').on('swipeleft', function(){
	$('.easy-sidebar-container').removeClass('toggled');
  $('.navbar.easy-sidebar').removeClass('toggled');
});