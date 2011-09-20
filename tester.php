!DOCTYPE>
<html lang="en">
<head>
  
  <title>Tester</title>
  
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="Content-Style-Type" content="text/css" />

</head>
<body>
  
  
<?php 
  echo "name=|".$_GET['name']."|<br/>";
  print_r($_POST); 
?>


            <form action="tester.php" method="post" id='tester_form' >

                <input type="text" name="name" />
                <input type="submit">
                <a href="#" onclick="document.getElementById('tester_form').submit();">submit</a>

            </form>

  
</body>
</html>
  
