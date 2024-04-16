<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package U3A_Online
 */

?>

	<footer id="colophon" class="site-footer">

        <nav class="social-menu">
	        <?php
	        // Social media menu
	        wp_nav_menu(
		        array(
			        'theme_location' => 'social-media',
			        'menu_id'        => 'social-media',
			        'menu_class'     => 'social-media-menu',
			        'container'      => 'nav',
			        'container_class'=> 'social-media-menu-container',
			        'container_id'   => 'social-media-menu-container',
			        'depth'          => 1,
		        )
	        );
	        ?>
        </nav>

		<div class="site-info">

<!--            --><?php
//            // Social media menu
//            wp_nav_menu(
//                array(
//                    'theme_location' => 'social-media',
//                    'menu_id'        => 'social-media',
//                    'menu_class'     => 'social-media-menu',
//                    'container'      => 'nav',
//                    'container_class'=> 'social-media-menu-container',
//                    'container_id'   => 'social-media-menu-container',
//                    'depth'          => 1,
//                )
//            );
//            ?>

			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'u3a-online' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'u3a-online' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'u3a-online' ), 'u3a-online', '<a href="https://github.com/cp3402-students/project-team4">CP3402_Team_4</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
