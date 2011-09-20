<?php

  // resource access

  function get_resource($name) 
  {
    global $nesting;
    $prefix = "./";
    if ($nesting==1) $prefix = "../";
    return $prefix.$name;
  }
  
  // clear floats

  function clear() 
  {
    echo "<div class='clear'></div>";
  }

?>