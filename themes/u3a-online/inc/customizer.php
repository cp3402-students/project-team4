<?php
/**
 * U3A Online Theme Customizer
 *
 * @package U3A_Online
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function u3a_online_customize_register($wp_customize) {
	$wp_customize->get_setting('blogname')->transport = 'postMessage';
	$wp_customize->get_setting('blogdescription')->transport = 'postMessage';
	$wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

	if (isset($wp_customize->selective_refresh)) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector' => '.site-title a',
				'render_callback' => 'u3a_online_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector' => '.site-description',
				'render_callback' => 'u3a_online_customize_partial_blogdescription',
			)
		);
	}
	// Customizing Button Settings in Customizer.
	$wp_customize->add_section('buttons_section', array(
		'title' => __('Button Settings', 'u3a_online'),
		'priority' => 30,
	));

	// Initialize Default Value for Custom Button #1.
	$wp_customize->add_setting('button_1_text', array(
		'default' => 'Become A Member',
		'sanitize_callback' => 'sanitize_text_field',
	));

	// Allows for Custom Button #1 Text to be customized.
	$wp_customize->add_control('button_1_text', array(
		'label' => __('Button 1 Text', 'u3a_online'),
		'section' => 'buttons_section',
		'type' => 'text',
	));

	// Initialize Default Link for Button #1 to empty string if not set.
	$wp_customize->add_setting('button_1_href', array(
		'default' => '',
		'sanitize_callback' => 'esc_url_raw',
	));

	// Allow Href for Button #1 to be Set to a page within WordPress site.
	$wp_customize->add_control('button_1_href', array(
		'label' => __('Button 1 Href', 'u3a_online'),
		'section' => 'buttons_section',
		'type' => 'dropdown-pages',
	));

	// Initialize Default Value for Custom Button #2.
	$wp_customize->add_setting('button_2_text', array(
		'default' => 'Log In',
		'sanitize_callback' => 'sanitize_text_field',
	));

	// Allows for Custom Button #1 Text to be customized.
	$wp_customize->add_control('button_2_text', array(
		'label' => __('Button 2 Text', 'u3a_online'),
		'section' => 'buttons_section',
		'type' => 'text',
	));

	// Initalize Default Link for Button #2 to empty string if not set.
	$wp_customize->add_setting('button_2_href', array(
		'default' => '',
		'sanitize_callback' => 'esc_url_raw',
	));

	// Allow Href for Button #2 to be Set to a page within WordPress site.
	$wp_customize->add_control('button_2_href', array(
		'label' => __('Button 2 Href', 'u3a_online'),
		'section' => 'buttons_section',
		'type' => 'dropdown-pages',
	));
}
add_action('customize_register', 'u3a_online_customize_register');

function u3a_online_customize_partial_blogname() {
	bloginfo('name');
}

function u3a_online_customize_partial_blogdescription() {
	bloginfo('description');
}

function u3a_online_customize_preview_js() {
	wp_enqueue_script('u3a-online-customizer', get_template_directory_uri() . '/js/customizer.js', array('customize-preview'), _S_VERSION, true);
}
add_action('customize_preview_init', 'u3a_online_customize_preview_js');
