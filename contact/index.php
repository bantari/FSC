
<?php
  $page     = "index";
  $section  = "contact";
  $nesting  = 1;
  include "../includes/setup.php";
  include get_resource("includes/html_head.php");
  include get_resource("includes/header.php");
  include get_resource("includes/navigation.php");
  include get_resource("includes/contact_validation.php");
?>

          <h1>Contact Information</h1>
          <div class="columns">

            <div class="column first" style="width:320px;">
              <iframe width="300" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=6+B+Street,+Burlington,+MA&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=40.137381,77.255859&amp;vpsrc=6&amp;ie=UTF8&amp;hq=&amp;hnear=6+B+St,+Burlington,+Massachusetts+01803&amp;ll=42.497882,-71.224644&amp;spn=0.001143,0.002358&amp;t=h&amp;z=14&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=6+B+Street,+Burlington,+MA&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=40.137381,77.255859&amp;vpsrc=6&amp;ie=UTF8&amp;hq=&amp;hnear=6+B+St,+Burlington,+Massachusetts+01803&amp;ll=42.497882,-71.224644&amp;spn=0.001143,0.002358&amp;t=h&amp;z=14">View Larger Map</a></small>
            </div><!--column.first-->
            
            <div class="column last">
              <h3>Fred Salvucci Corporation</h3>
              <p>
                6 B Street<br/>
                Burlington, MA 01803 USA</br>
              </p>
              <p>
                <strong>T:</strong> 781.272.1662<br/>
                <strong>F:</strong> 781.272.1585<br/>
                <strong>E:</strong> <a class="email" href="mailto:XXXX@fredsalvuccicorp.com">XXXX@fredsalvuccicorp.com</a>
              </p>
            </div><!--column.next-->
              
          </div><!--columns-->
          <?php clear(); ?>
        
          <h2>Contact Form</h2>
          <div class="columns11 contact_form_wrapper">
            
          	<?php if(isset($hasError)) { //If errors are found ?>
          	  <div class="error">
            		<strong>Form contains errors - not sent!</strong><br />
          		  Please check if you've filled all the fields with valid information. Thank you.
          		</div>
          	<?php } ?>

          	<?php if(isset($emailSent) && $emailSent == true) { //If email is sent ?>
          	  <div class="success">
          		  <strong>Email successfully sent!</strong><br />
          		  Thank you for your inquire. If your inquiry requires a response, we will contact you directly within 24 hours. 
            	</div>
          	<?php } ?>
	
	            
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" id="contact_form" method="post" >

              <div class="column first">
                <input type="hidden" name="form_posted" value="form_posted" />
                <label for="name" >Name:</label  ><br /><input type="text" id="name"  name="name"  value="<?php echo $name_value; ?>" class="<?php echo $name_class ?>" /><br />
                <label for="email">E-mail:</label><br /><input type="text" id="email" name="email" value="<?php echo $email_value; ?>" class="<?php echo $email_class ?>" /><br />
                <label for="fax"  >Fax:</label   ><br /><input type="text" id="fax"   name="fax"   value="<?php echo $fax_value; ?>" class="<?php echo $fax_class ?>" /><br />
              </div>

              <div class="column last">
                <label for="message">Message:</label><br /><textarea id="message" name="message" cols="" rows="6" class="<?php echo $message_class ?>" ><?php echo $message_value; ?></textarea>
              </div>

            </form>
          </div><!--columns-->
          <?php clear(); ?>

          <div class="align_right">
            <a href="#" onclick="document.getElementById('contact_form').reset();">clear</a> |
            <a href="#" onclick="document.getElementById('contact_form').submit();" class='more'>submit</a>
          </div>
          
<?php 
  include get_resource("includes/footer.php"); 
  include get_resource("includes/html_foot.php"); 
?>
