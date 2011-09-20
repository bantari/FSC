<table class="layout_table"><tbody><tr>
  <td class="navigation_column">

    <div class="navigation"><div class="navigation_inner">

      <ul class="main_nav">

      	<li><a href="<?php echo get_resource("index.php"); ?>"           class="<?php if ($section=="home")      {echo "current";}; ?>">Home</a></li>
        <li><a href="<?php echo get_resource("about/index.php"); ?>"     class="<?php if ($section=="about")     {echo "current";}; ?>">About Us</a></li>
        <li><a href="<?php echo get_resource("services/index.php"); ?>"  class="<?php if ($section=="services")  {echo "current";}; ?>">Services</a></li>
        <li><a href="<?php echo get_resource("projects/index.php"); ?>"  class="<?php if ($section=="projects")  {echo "current";}; ?>">Project Portfolio</a></li>
        <li><a href="<?php echo get_resource("contact/index.php"); ?>"   class="<?php if ($section=="contact")   {echo "current";}; ?>">Contact Us</a></li>

      </ul>


      <?php if ($section=='home') { ?>
        <?php if ($page!='index') { ?>

              <div class="box first"><div class="box_inner">
                <ul class="sub_nav">
                  <li><a href="<?php echo get_resource("home/awards.php"); ?>">Award Winning Projects</a></li>
                  <li><a href="<?php echo get_resource("home/management_team.php"); ?>">Management Team</a></li>
                  <li><a href="<?php echo get_resource("home/privacy_policy.php"); ?>">Privacy Policy</a></li>
                </ul>
              </div></div><!--box-->

        <?php } ?>
      <?php } else if ($section=='about') { ?>

              <div class="box first"><div class="box_inner">
                <ul class="sub_nav">
                  <li><a href="#">Working with FSC</a></li>
                  <li><a href="#">Safety</a></li>
                  <li><a href="<?php echo get_resource("home/management_team.php"); ?>">Management Team</a></li>
                  <li><a href="<?php echo get_resource("home/awards.php"); ?>">Award Winning Projects</a></li>
                  <li><a href="#">Partners</a></li>
                </ul>
              </div></div><!--box-->

      <?php } else if ($section=='contact') { ?>

      <?php } else if ($section=='services') { ?>

              <div class="box first"><div class="box_inner">
              	<ul class="sub_nav">
                	<li><a href="<?php echo get_resource("services/index.php"); ?>">Main Services</a></li>
                  <li><a href="#">Commerical</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Entertainment</a></li>
                  <li><a href="#">Government</a></li>
                  <li><a href="#">Hospitality</a></li>
                  <li><a href="#">Retail</a></li>
                  <li><a href="#">Science</a></li>
                  <li><a href="#">Senior Living</a></li>
                </ul>
              </div></div>

      <?php } else if ($section=='projects') { ?>

              <div class="box first"><div class="box_inner">
              	<ul class="sub_nav">
                	<li><a href="<?php echo get_resource("services/index.php"); ?>">Main Services</a></li>
                  <li><a href="#">Commerical</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Entertainment</a></li>
                  <li><a href="#">Government</a></li>
                  <li><a href="#">Hospitality</a></li>
                  <li><a href="#">Retail</a></li>
                  <li><a href="#">Science</a></li>
                  <li><a href="#">Senior Living</a></li>
                </ul>
              </div></div>

      <?php } ?>



      <?php if ($section!="home" OR $page!="index") { ?>
        <div class="box indented"><div class="box_inner">
          <h3>Contact Us</h3>
          <p>
            Fred Salvucci Corporation<br />
            6 B Street<br />
            Burlington, MA 01803 USA<br />
            T: 781.272.1662<br />
            F: 781.272.1585
          </p>
        </div></div><!--box-->
      <?php } ?>

    </div></div><!--navigation-->

  </td>
  <td class="content_column">

    <div class="content"><div class="content_inner">
