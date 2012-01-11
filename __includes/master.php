<?php

  //------------------------------------------------------------
  function get_resource($name)
  {
    $str=str_replace(".php","",$name);
    return "?page=".$str;
  }
  
  //------------------------------------------------------------
  function get_page_title($page)
  {
    $title = str_replace('/',' &rarr; ',$page);
    $title = str_replace('_',' &rarr; ',$title);
    return $title;
  }


  //------------------------------------------------------------
  function get_page_url($page)
  {
    return $page.'.php';
  }


  //------------------------------------------------------------
  function get_navigation($page)
  {
    $arr = explode('/',$page);
    return $arr[0];
  }


  //------------------------------------------------------------
  function get_subnav($page)
  {
    $arr = explode('/',$page);
    return $arr[sizeof($arr)-2];
  }


  //------------------------------------------------------------
  function navigation_here($name)
  {
    global $navigation;
    if (strtolower($navigation) == strtolower($name)) { return 'current'; }
    return '';
  }
  
  
  //------------------------------------------------------------
  function subnav_here($name)
  {
    global $subnav;
    if (strtolower($subnav) == strtolower($name)) { return 'current'; }
    return '';
  }

  //------------------------------------------------------------
  function page_here($name)
  {
    global $page;
    if (strtolower($page) == strtolower($name)) { return 'current'; }
    return '';
  }
  //------------------------------------------------------------
  function clear() 
  {
    echo "<div class='clear'></div>";
  }

  //------------------------------------------------------------
  function get_thumb($thumb,$img='',$rel='gal1',$title='')
  {
    if ($img=='') { $img = $thumb; }
    $str  = "<a href='__images/".$img."' rel='".$rel."' class='gallery'>";
    $str .= "<img class='thumbnail' src='__images/".$thumb."' alt='thumb' width='100' />";
    $str .= "</a>";
    return $str;
  }
  


?>