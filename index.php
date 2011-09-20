<?php
  $page     = "index";
  $section  = "home";
  $nesting  = 0;
  include "includes/setup.php";
  include get_resource("includes/html_head.php");
  include get_resource("includes/header.php");
?>

<div class="home_banner"><div class="home_banner_inner">
  <hr/>
  <div id='slideshowHolder'>
    <img src='images/Elisif_20110615_9244.jpg' alt='' width="900" />
    <img src='images/Elisif_20110621_0244.jpg' alt='' width="900" />
    <img src='images/Elisif_20110615_9257.jpg' alt='' width="900" />
  </div>
  <hr/>
</div></div><!--home_banner-->
<script>
  $('#slideshowHolder').jqFancyTransitions({ width: 900, height: 300 });
</script>

<?php 
  include get_resource("includes/navigation.php"); 
?>

          <div class="columns">
            
            
            <div class="column promos"><div class='column_inner'>
              <h2>Featured Projects</h2>
              <ul class="with_date underlined">
                <li>
                  <span class="date">July 2011</span>
                  <a href="<?php echo get_resource("projects/index.php"); ?>">Boston College Friendster Hall</a>
                </li>
                <li>
                  <span class="date">August 2011</span>
                  <a href="<?php echo get_resource("projects/index.php"); ?>">State Street Restoration</a>
                </li>
                <li>
                  <span class="date">September 2011</span>
                  <a href="<?php echo get_resource("projects/index.php"); ?>">Zoe International Building</a>
                </li>
              </ul>
              <a href="<?php echo get_resource("projects/index.php"); ?>" class="more">all projects</a>
            </div></div><!--column.promos-->


            <div column class="column main"><div class='column_inner'>
              <h2>Building visions one brick at a time</h2>
              <p>
                Fred Salvucci Corporation is a Boston-based masonry contractor specializing in commercial, 
                institutional and municipal projects. We offer a wide variety of masonry construction services, 
                including stone work, brick work, installations, restoration, and XXXX. Our work can be seen all 
                over Eastern Massachusetts for the past 30 years.              
              </p>
              <p>
                We primarily serve commercial, industrial, and institutional customers and general contractors 
                throughout New England. Through experience, reliability and trust – our mission is to build your 
                vision one brick at a time. 
              </p>
              <ul>
                <li>Employs over 100 union bricklayers, laborers, and operating engineers.</li>
                <li>Members of the International Union of Bricklayers and Allied Craftsworkers, Laborers’ Union and IUOE.</li>
                <li>Several national and international award winning projects. </li>
              </ul>

              <a href="<?php echo get_resource("about/index.php"); ?>" class="more">read more</a>
            </div></div><!--column.main-->

          </div><!--columns-->
          <?php clear(); ?>

<?php 
  include get_resource("includes/footer.php"); 
  include get_resource("includes/html_foot.php"); 
?>
