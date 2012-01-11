
<?php if ($page == "home/index" ) { ?>

  <link href="__css/jquery_wtrotator.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="__scripts/jquery_easing_13_min.js"></script>
  <script type="text/javascript" src="__scripts/jquery_wtrotator_min.js"></script>
	<script type="text/javascript">
    	$(document).ready(	
			function() {
				$(".container").wtRotator({
					width:900,
					height:300,
					thumb_width:24,
      		thumb_height:24,
					button_width:24,
					button_height:24,
					button_margin:5,
					auto_start:true,
					delay:5000,
					play_once:false,
					transition:"block.drop",
					transition_speed:800,
					auto_center:true,
					easing:"",
					cpanel_position:"inside",
					cpanel_align:"BR",
					timer_align:"top",
					display_thumbs:true,
					display_dbuttons:true,
					display_playbutton:true,
					display_thumbimg:false,
     			display_side_buttons:true,
					display_numbers:true,
					display_timer:true,
					mouseover_pause:false,
					cpanel_mouseover:false,
					text_mouseover:false,
					text_effect:"down",
					text_sync:true,
					tooltip_type:"image",
					lock_tooltip:true,
					shuffle:false,
					block_size:75,
					vert_size:55,
					horz_size:50,
					block_delay:25,
					vstripe_delay:75,
					hstripe_delay:180			
				});
			}
		);
  </script>    
<?php } ?>



<?php if ($page=="projects/index" OR $page=="services/index") { ?>

  <link rel="stylesheet" href="__css/jquery_fancybox_134.css" type="text/css" media="screen" />
  <script type="text/javascript" src="__scripts/jquery_easing_13_min.js"></script>
  <script type="text/javascript" src="__scripts/jquery_fancybox_134_pack.js"></script>

<?php } ?>



<?php 
if ($page=='contact/index') { 
  include "__includes/contact_validation.php";
} 
?>
