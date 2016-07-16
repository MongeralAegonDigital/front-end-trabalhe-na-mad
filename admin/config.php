<?php
/*
 *
 * Options Panel Arguments
 * - Be careful when editing this!
 *
 */

$theme = wp_get_theme();

$args = array(

    // TYPICAL -> Change these values as you need/desire
    'opt_name'          	=> 'theme_options_' . sanitize_title($theme->get('Name')), // This is where your data is stored in the database and also becomes your global variable name.
    'display_name'			=> $theme->get('Name'), // Name that appears at the top of your panel
    'display_version'		=> $theme->get('Version'), // Version that appears at the top of your panel
    'menu_type'          	=> 'menu', //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
    'allow_sub_menu'     	=> true, // Show the sections below the admin menu item or not
    'menu_title'			=> $theme->get('Name'),
    'page'		 	 		=> $theme->get('Name'),
    'google_api_key'   	 	=> 'AIzaSyBDmSLNoNF5Tk1zRUy6ZJMVlB58amxjFVQ', // Must be defined to add google fonts to the typography module
    'global_variable'    	=> 'Options', // Set a different name for your global variable other than the opt_name
    'dev_mode'           	=> false, // Show the time the page took to load, etc
    'customizer'         	=> false, // Enable basic customizer support

    // OPTIONAL -> Give you extra features
    'page_priority'      	=> 3.3543, // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
    //'page_parent'        	=> 'themes.php', // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
    'page_permissions'   	=> 'manage_options', // Permissions needed to access the options panel.
    //'menu_icon'          	=> 'dashicons dashicons-art', // Specify a custom URL to an icon
    //'last_tab'           	=> '', // Force your panel to always open to a specific tab (by id)
    'page_icon'          	=> 'icon-themes', // Icon displayed in the admin panel next to your menu_title
    'page_slug'          	=> 'theme_options', // Page slug used to denote the panel
    'save_defaults'      	=> true, // On load save the defaults to DB before user clicks save or not
    'default_show'       	=> false, // If true, shows the default value next to each field that is not the default value.
    'default_mark'       	=> '*', // What to print by the field's title if the value shown is default. Suggested: *


    // CAREFUL -> These options are for advanced use only
    'transient_time' 	 	=> 60 * MINUTE_IN_SECONDS,
    'output'            	=> true, // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
    'output_tag'            => true, // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
    //'domain'             	=> 'redux-framework', // Translation domain key. Don't change this unless you want to retranslate all of Redux.
    'footer_credit'      	=> '', // Disable the footer credit of Redux. Please leave if you can help it.


    // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
    //'database'           	=> '', // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!


    //'show_import_export' 	=> true, // REMOVE
    //'system_info'        	=> false, // REMOVE

    //'help_tabs'          	=> array(),
    //'help_sidebar'       	=> '', // __( '', $args['domain'] );
);

/*
 * Pass $sections back to the class
 */
$this->args = $args;