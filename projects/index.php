<?php
  $page     = "index";
  $section  = "projects";
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

          <h2>Project Porfolio</h2>


          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110621_0244"); ?>
              <?php echo image_block("Elisif_20110621_0255"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>World Trade Center - East Office Tower; Boston, MA</h3>
              <p>
                A sixteen story brick veneered structure with precast concrete windowsills, accent bands and fascia as 
                well as a granite base. Three below-grade parking levels with concrete block partitions throughout each 
                level, as well as, concrete block partitions and back-up walls at the first two above grade floors.
              </p>
              <ul>
                <li>The owner is Pembroke Realty (Fidelity Investments)</li>
                <li>The architect is Shepley, Bulfinch, Richardson and Abbott (617-423-1700) contact Arto Kurkjian. </li>
                <li>The value of the project was $6,500,000.00.</li>
              </ul>
            </div>
          </div><!--columns-->
          <div class="clear"></div>
          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110621_0260"); ?>
              <?php echo image_block("Elisif_20110613_9237"); ?>
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
          <div class="clear"></div>

          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110615_9238"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>West Campus Residence Halls, Buildings B &amp; C - Northeastern University; Boston, MA. </h3>
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
          <div class="clear"></div>          

          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110615_9242"); ?>
              <?php echo image_block("Elisif_20110615_9244"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>Hopkinton High School; Hopkinton, MA. </h3>
              <p>
                A three story, all new structure with two colored brick veneer, precast trim and panels 
                and extensive use of cmu partitions in the interior.  
              </p>
              <ul>
                <li>The owner is the Town of Hopkinton, MA. </li>
                <li>The architect is The Design Partnership of Cambridge. </li>
                <li>The project value was $3,000,000.00.</li>
              </ul>
            </div>
          </div><!--columns-->
          <div class="clear"></div>

          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110615_9245"); ?>
              <?php echo image_block("Elisif_20110615_9257"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>St. Mary's Hall - Boston College; Chestnut Hill, MA</h3>
              <p>
                Removal and replacement of deteriorated precast that involved field measuring and working with numerous custom shapes and pieces.   
              </p>
              <ul>
                <li>General Contractor: Boston College. </li>
                <li>Project Value $268,000.</li>
              </ul>
            </div>
          </div><!--columns-->
          <div class="clear"></div>

          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110615_9259"); ?>
              <?php echo image_block("Elisif_20110615_9241"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>Baptist Library - Boston College; Chestnut Hill, MA. </h3>
              <p>
                Two phase renovation of Bapst Hall in which phase one involved the removal and replacement of all 
                deteriorated limestone quoins at the Burns Tower. As a focal point of the University, it was critical 
                that the work appeared seamless with the other masonry portions of the building. Phase two involved 
                the restoration of both sets of exterior stone stairs and required the removal and storage of the 
                original stone, rebuilding the support structure of the steps, and return/installation of original stone. 
              </p>
              <ul>
                <li>General Contractor: Boston College. </li>
                <li>Project Value: $225,000</li>
                <li>Contact Judy Selwyn, Preservation Tech. Assoc., Inc. </li>
              </ul>
            </div>
          </div><!--columns-->
          <div class="clear"></div>

          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110615_9260"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>Baker Library - Harvard University; Cambridge, MA. </h3>
              <p>
                Major renovation of the existing library included restorative work on the brick, granite 
                and marble along with a new addition. The workmanship at the addition required a seamless 
                integration with the exisiting space and that was accomplished through the use and 
                incorporation of the same three masonry products. 
              </p>
              <ul>
                <li>General Contractor: Skanska USA.</li> 
                <li>Project Value: $1,700,000. </li>
                <li>Contacts: Kerim Evan (617) 293-7697 / Jim Kraft (781) 953-8403</li>
              </ul>
            </div>
          </div><!--columns-->
          <div class="clear"></div>

          <hr>
          <div class="columns">
            <div class="column first" style="width:120px;">
              <?php echo image_block("Elisif_20110615_9262"); ?>
              <?php echo image_block("Elisif_20110615_9263"); ?>
            </div>
            <div class="column last" style="width:500px;">
              <h3>Galen Stone Tower - Wellesley College; Wellesley, MA. </h3>
              <p>
                Complete restoration of a historic 182 ft clock tower that is the focal point of the 
                Wellesley College campus. The scope of work included a 100% restoration of existing 
                masonry and the installation of intricate lead coated flashings. Deteriorated limestone 
                was carefully removed, detailed, and duplicted to matching exisiting limestone. 
              </p>
              <ul>
                <li>General Contractor: Richard White Sons. </li>
                <li>Project Value $1,200,000. </li>
                <li>Contact: Kevin Hines (617) 332-9500.</li>
              </ul>
            </div>
          </div><!--columns-->
          <div class="clear"></div>          
          
          
          
    <div class="clear"></div>
  
<?php 
  include get_resource("includes/footer.php"); 
  include get_resource("includes/html_foot.php"); 
?>
