<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package U3A_Online
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'u3a-online' ); ?></a>

    <header id="masthead" class="site-header">
        <div class="site-branding">
            <div class="custom-logo">
				<?php the_custom_logo(); ?>
            </div><!-- .custom-logo -->
            <div class="site-branding-text">
				<?php if ( is_front_page() && is_home() ) : ?>
                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                                              rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php else : ?>
                    <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                                             rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php endif;
				$u3a_online_description = get_bloginfo( 'description', 'display' );
				if ( $u3a_online_description || is_customize_preview() ) :
					?>
                    <p class="site-description"><?php echo $u3a_online_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						?></p>
				<?php endif; ?>
            </div><!-- .site-branding-text -->
        </div><!-- .site-branding -->

        <div class="custom-buttons">
		    <?php
		    // Get the href values from Customizer settings
		    $href_1 = get_theme_mod('button_1_href', '');
		    $href_2 = get_theme_mod('button_2_href', '');

		    // Check if both button hrefs are not empty and not "http://0" before rendering the buttons to catch all possible outputs in this theme.
		    if ((!empty($href_1) && $href_1 !== 'http://0') || (!empty($href_2) && $href_2 !== 'http://0')) :
			    ?>
			    <?php if (!empty($href_1) && $href_1 !== 'http://0') : ?>
                <div class="custom-button-1">
                    <a href="<?php echo esc_url($href_1); ?>">Become A Member</a>
                </div>
		    <?php endif; ?>
			    <?php if (!empty($href_2) && $href_2 !== 'http://0') : ?>
                <div class="custom-button-2">
                    <a href="<?php echo esc_url($href_2); ?>">Log In</a>
                </div>
		    <?php endif; ?>
		    <?php endif; ?>
        </div><!-- .custom-buttons -->

        <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle" aria-controls="primary-menu"
                    aria-expanded="false"><?php esc_html_e( 'Primary Menu', '-online' ); ?></button>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
        </nav><!-- #site-navigation -->



    </header><!-- #masthead -->
	<?php if ( is_front_page() ) : ?>
        <figure class="header-image"><?php the_header_image_tag(); ?></figure>
	<?php endif; ?>
