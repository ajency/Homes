<?php
/**
 * apartmentselector template for displaying the footer
 *
 * @package    WordPress
 * @subpackage apartmentselector
 * @since      apartmentselector 0.0.1
 */
?>

<ul class="footer-widgets"><?php
    if ( function_exists( 'dynamic_sidebar' ) ) :
        dynamic_sidebar( 'footer-sidebar' );
    endif; ?>
</ul>

</div>
<?php wp_footer(); ?>


</body>
</html>