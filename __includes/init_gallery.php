<script>
$(document).ready(function() {

	/* Apply fancybox to multiple items */
	
	$("a.gallery").fancybox({
		'transitionIn'	  :	'elastic',
		'transitionOut'	  :	'fade',
		'speedIn'		      :	600, 
		'speedOut'		    :	200, 
		'overlayShow'	    :	true,
		'padding'         : 5,
		'cyclic'          : true,
		'titlePosition'   : 'inside',
		'overlayOpacity'  : 0.5,
		'overlayColor'    : '#000',
		'swf'             : {wmode:'transparent'},
		'width'           : 720,
		'height'          : 534
	});
	
});
</script>
