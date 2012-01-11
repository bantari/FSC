<?php

  include '__includes/master.php';

  $page = (isset($_GET['page']) ? $_GET['page'] : 'about/index' );
  
  $page_url   = get_page_url($page);
  $navigation = get_navigation($page);
  $subnav     = get_subnav($page);
  
  include '__includes/html_head.php';

?>
<body class="<?php echo $navigation." ".$subnav; ?>">

  <div class="main_wrapper"><div class="main_wrapper_inner">
    <div class="header"><div class="header_inner"><?php include "__includes/header.php"; ?></div></div>

    <?php if ($page=='home/index') { ?>
      <div class="home_banner"><div class="home_banner_inner"><?php include "__includes/home_banner.php"; ?></div></div>
    <?php } ?>

    <table class="layout_table"><tbody><tr>
      <td class="navigation_column">
        <div class="navigation"><div class="navigation_inner"><?php include "__includes/navigation.php"; ?></div></div>

      </td>
      <td class="content_column">
        <div class="content"><div class="content_inner"><?php include $page_url; ?></div></div>
      </td>
    </tr></tbody></table>

    <div class="footer"><div class="footer_inner"><?php include "__includes/footer.php"; ?></div></div>
  </div></div><!-- main_wrapper-->

  <?php include "__includes/html_foot.php"; ?>

</body>
</html>