<?php
  $page     = "index";
  $section  = "services";
  $nesting  = 1;
  $gallery  = true;

  function image_block($name) 
  {
    $thumb = "<a class='zoom' href='#".$name."'><img src='".get_resource("images/".$name.".jpg")."' width='100' /></a>";
    $block = "<div id='".$name."' style='display: none;'><img src='".get_resource("images/".$name.".jpg")."' /><div class='content for_zoom'></div></div>";
    return $thumb . $block;
  }
  

  include "../includes/setup.php";
  include get_resource("includes/html_head.php");
  include get_resource("includes/header.php");
  include get_resource("includes/navigation.php");
?>


          <h1>Overview of Services</h1>
          <p>
            For over 30 years, Fred Salvucci Corporation has been applying expertise in new 
            building construction and the restoration of historic and non-historic buildings. 
            Our experienced team of professionals has earned the respect of the masonry 
            industry propelling FSC to one of the largest masonry contractors serving New 
            England. Fred Salvucci Corporation's services includes masonry, masonry 
            restoration, and construction management.
          </p>
          
          
          <div class="content_banner"><div class="content_banner_inner">
            <img src="<?php echo get_resource("images/img_02.jpg"); ?>" />
          </div></div>

          <h2>Building your foundation brick by brick</h2>
          <p class="strong">
            Fred Salvucci Corporation  is skilled in working with natural stone, 
            cast stone, brick, block, and terra cotta. FSC has performed award winning 
            masonry on some of the most exciting projects in Boston and surrounding areas. 
            FSC's mission is to provide expert service, highly trained crews, accurate cost 
            estimates and strives to complete your project on-time and on-budget.
          </p>
          <p>
            FSC provides high quality building restoration services to a variety of high profile clients. 
            We offer quality estimates and survey evaluations. Primary areas of expertise include:
          </p>
          
          <div class="columns11">
            <div class="column first">
              <ul>
                <li><a href="#">New  masonry</a></li> 
                <li><a href="#">Cleaning, repairs and replication of limestone</a></li> 
                <li>Natural stone and cast stone restoration</li>
              </ul>
            </div>
            <div class="column last">
              <ul>
                <li><a href="#">Masonry restoration and cleaning</a></li> 
                <li><a href="#">New interior exterior stonework</a></li> 
                <li>Facade repair or replacement</li>
              </ul>
            </div>
          </div>

          <p>
            FSC has worked with high profile clients throughout New England. 
            Visit our project portfolio to view details of several completed 
            projects over the last few years.
          </p>
          
          <h2>Featured Projects</h2>
          
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block('Elisif_20110621_0260'); ?>
              <?php echo image_block('Elisif_20110613_9237'); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>Higgins Hall - Boston College; Chestnut Hill, MA. </h3>
              <p>
                A four story addition to the existing building with 28,000 square feet of granite ashlar 
                veneer and extensive use of limestone to trim-out the openings and corners of the structure, 
                some of which is very intricate. The back-up system is concrete block with a specially 
                engineered veneer anchorage system attached to it. The lower levels of the project have 
                cmu partitions. 
              </p>
              <ul>
                <li>The owner of this project is Boston College. </li>
                <li>The architect is Shepley, Bulfinch, Richardson and Abbott (617-423-1700). </li>
                <li>The value of the project was $4,200,000.00.</li>
              </ul>
            </div>
          </div><!--columns-->
          <?php clear(); ?>


          <hr/>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block('Elisif_20110615_9238'); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>West Campus Residence Halls, Buildings B & C - Northeastern University; Boston, MA. </h3>
              <p>
                A six story brick veneered structures, using two different colored brick, with the interior 
                stair towers built of concrete block. 
              </p>
              <ul>
                <li>The owner is Northeastern University</li>
                <li>The architect is William Rawn Associates (617-423-3470) contact Anne-Sophie Divenyi. </li>
                <li>The project value was $1,600,000.00.</li>
              </ul>
            </div>
          </div><!--columns-->
          <?php clear(); ?>
          

          <a href="<?php echo get_resource("projects/index.php"); ?>" class="more">read more</a>
          
          
          <div id="" style="display:none;">
          </div>

<?php 
  include get_resource("includes/footer.php"); 
  include get_resource("includes/html_foot.php"); 
?>
