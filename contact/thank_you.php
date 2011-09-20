<?php
  $page     = "index";
  $section  = "contact";
  $nesting  = 1;
  include "../includes/setup.php";
  include get_resource("includes/html_head.php");
  include get_resource("includes/header.php");
  include get_resource("includes/navigation.php");
?>

  <h1>Thank You</h1>
  <p>
    Thank you for your inquire. If your inquiry requires a response, we will contact you directly within 24 hours. 
  </p>


            <form action="thank_you.php" method="post" >

              <div class="column first">
                <input type="hidden" name="submit" />
                <label for="name" >Name:</label  ><br /><input type="text" id="name"  name="name"  value="" /><br />
                <label for="email">E-mail:</label><br /><input type="text" id="email" name="email" value="" /><br />
                <label for="fax"  >Fax:</label   ><br /><input type="text" id="fax"   name="fax"   value="" /><br />
              </div>

              <div class="column last">
                <label for="message">Message:</label><br /><textarea id="message" name="message" cols="" rows="6"></textarea>
                <input type="submit" />
              </div>

            </form>


<?php 
  include get_resource("includes/footer.php"); 
  include get_resource("includes/html_foot.php"); 
?>
