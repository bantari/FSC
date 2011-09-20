
<!DOCTYPE>
<html lang="en">
<head>
  
  <title>FSC</title>
  
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="Content-Style-Type" content="text/css" />

  <link href="<?php echo get_resource("css/reset.css"); ?>"            rel="stylesheet" type="text/css" />
  <link href="<?php echo get_resource("css/master.css"); ?>"           rel="stylesheet" type="text/css" />
  <link href="<?php echo get_resource("css/header.css"); ?>"           rel="stylesheet" type="text/css" />
  <link href="<?php echo get_resource("css/navigation.css"); ?>"       rel="stylesheet" type="text/css" />
  <link href="<?php echo get_resource("css/content.css"); ?>"          rel="stylesheet" type="text/css" />
  <link href="<?php echo get_resource("css/footer.css"); ?>"           rel="stylesheet" type="text/css" />

  <!--[if lt IE 7]>
  	<link href="/css/ie_style.css" rel="stylesheet" type="text/css" />
  <![endif]-->

  <link rel="icon" type="image/png" href="http://www.fredsalvuccicorp.com/favicon.ico">
  
  <?php if ($section == "home" AND $page == "index" ) { ?>
	  <script type="text/javascript" src="scripts/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/jqFancyTransitions.min.js"></script>
  <?php } ?>
  
  <?php if ($section == "home" AND $page == "index_new" ) { ?>
    <link href="<?php echo get_resource("css/wt-rotator.css"); ?>" rel="stylesheet" type="text/css" />
	  <script type="text/javascript" src="scripts/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="scripts/jquery.easing.1.3.min.js"></script>
    <script type="text/javascript" src="scripts/jquery.wt-rotator.min.js"></script>
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
  					transition:"blocks.drop",
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
       			display_side_buttons:false,
  					display_numbers:true,
  					display_timer:true,
  					mouseover_pause:false,
  					cpanel_mouseover:false,
  					text_mouseover:false,
  					text_effect:"fade",
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

  <?php if ($gallery == true) { ?>
  	<script type="text/javascript" src="<?php echo get_resource("scripts/jquery.min.js"); ?>"></script>
  	<script type="text/javascript" src="<?php echo get_resource("scripts/fancyzoom.js"); ?>"></script>
  	<script type="text/javascript" charset="utf-8">
      $(document).ready(function() {
        $('a.zoom').fancyZoom();
      });  
    </script>
  <?php } ?>

</head>

<?php if ($gallery == true) { ?>
  <body onload="setupZoom();">
<?php } else { ?>
  <body>
<?php } ?>

  <div class="main_wrapper"><div class="main_wrapper_inner">
