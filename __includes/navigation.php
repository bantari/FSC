<ul class='main_nav'>

  <li><a href='<?php echo '?page=home/index';       ?>' class='<?php echo navigation_here('home');      ?>'>Home</a></li>
  <li><a href='<?php echo '?page=about/index';      ?>' class='<?php echo navigation_here('about');     ?>'>About Us</a></li>
  <li><a href='<?php echo '?page=services/index';   ?>' class='<?php echo navigation_here('services');  ?>'>Services</a></li>
  <li><a href='<?php echo '?page=projects/index';   ?>' class='<?php echo navigation_here('projects');  ?>'>Project Portfolio</a></li>
  <li><a href='<?php echo '?page=contact/index';    ?>' class='<?php echo navigation_here('contact');   ?>'>Contact Us</a></li>

</ul>


<?php if ($navigation=='home') { ?>

  <?php if ($page!='home/index') { ?>
    <div class="box first"><div class="box_inner">
      <ul class="sub_nav">
        <li><a href="<?php echo get_resource("home/awards.php"); ?>">Award Winning Projects</a></li>
        <li><a href="<?php echo get_resource("home/management_team.php"); ?>">Management Team</a></li>
        <li><a href="<?php echo get_resource("home/privacy_policy.php"); ?>">Privacy Policy</a></li>
      </ul>
    </div></div><!--box-->
  <?php } ?>

<?php } else if ($navigation=='about') { ?>

        <div class="box first"><div class="box_inner">
          <ul class="sub_nav">
            <li><a href="#">Working with FSC</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="<?php echo get_resource("home/management_team.php"); ?>">Management Team</a></li>
            <li><a href="<?php echo get_resource("home/awards.php"); ?>">Award Winning Projects</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div></div><!--box-->

<?php } else if ($navigation=='contact') { ?>

<?php } else if ($navigation=='services') { ?>

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

<?php } else if ($navigation=='projects') { ?>

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



<?php if ($navigation!="home" OR $page!="home/index") { ?>

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
