<?php

/**
 * ReduxFramework Sample Config File
 * For full documentation, please visit: https://github.com/ReduxFramework/ReduxFramework/wiki
 **/

if (!class_exists("ReduxFramework")) {
  return;
}

if (!class_exists("TemaPersonalizadoRedux")) {
  class TemaPersonalizadoRedux
  {

    public $args = array();
    public $sections = array();
    /* This var will carry which options wiil be available for us to use on our less file */
    public $less = array();
    /* Error */
    public $_error = "";

    public $theme;
    public $ReduxFramework;

    public function __construct()
    {

      // Just for demo purposes. Not needed per say.
      $this->theme = wp_get_theme();

      // Set the default arguments
      $this->setArguments();

      // Set a few help tabs so you can see how it's done
      $this->setHelpTabs();

      // Create the sections and fields
      $this->setSections();

      if (!isset($this->args['opt_name'])) { // No errors please
        return;
      }

      $this->ReduxFramework = new ReduxFramework($this->sections, $this->args);

    }


    /**
         *
         * This is a test function that will let you see when the compiler hook occurs.
         * It only runs if a field    set with compiler=>true is changed.
         **/

    function compiler_action($options, $css)
    {

    }

    /*
         * Prints errors while compiling
         */
    function compiler_error()
    {
?>
<div class="error">
  <p><strong>Fatal Error: </strong><?php echo $this->_error; ?></p>
</div>
<?php
    }

    /**
         *
         * Custom function for filtering the sections array. Good for child themes to override or add to the sections.
         * Simply include this function in the child themes functions.php file.
         *
         * NOTE: the defined constants for URLs, and directories will NOT be available at this point in a child theme,
         * so you must use get_template_directory_uri() if you want to use any of the built in icons
         **/

    function dynamic_section($sections)
    {
      //$sections = array();
      $sections[] = array(
        'title' => __('Section via hook', 'redux-framework-demo'),
        'desc' => __('<p class="description">This is a section created by adding a filter to the sections array. Can be used by child themes to add/remove sections from the options.</p>', 'redux-framework-demo'),
        'icon' => 'el-icon-paper-clip',
        // Leave this as a blank section, no options just some intro text set above.
        'fields' => array()
      );

      return $sections;
    }


    /**
         *
         * Filter hook for filtering the args. Good for child themes to override or add to the args array. Can also be used in other functions.
         **/

    function change_arguments($args)
    {
      //$args['dev_mode'] = true;

      return $args;
    }


    /**
         *
         * Filter hook for filtering the default value of any given field. Very useful in development mode.
         **/

    function change_defaults($defaults)
    {
      $defaults['str_replace'] = "Testing filter hook!";

      return $defaults;
    }


    // Remove the demo link and the notice of integrated demo from the redux-framework plugin
    function remove_demo()
    {

      // Used to hide the demo mode link from the plugin page. Only used when Redux is a plugin.
      if (class_exists('ReduxFrameworkPlugin')) {
        remove_filter('plugin_row_meta', array(ReduxFrameworkPlugin::get_instance(), 'plugin_meta_demo_mode_link'), null, 2);
      }

      // Used to hide the activation notice informing users of the demo panel. Only used when Redux is a plugin.
      remove_action('admin_notices', array(ReduxFrameworkPlugin::get_instance(), 'admin_notices'));

    }


    public function setSections()
    {

      /*
             * Require sections setup
             */

      require_once(dirname(__FILE__) . '/sections.php');

    }

    public function setHelpTabs()
    {
      /*
             * Require helptabs setup
             */
      require_once(dirname(__FILE__) . '/help.php');
    }


    /**
         *
         * All the possible arguments for Redux.
         * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
         **/
    public function setArguments()
    {
      /*
             * Require args setup
             */
      require_once(dirname(__FILE__) . '/config.php');
    }
  }

  add_action('init', "redux_run", -1);
  function redux_run()
  {
    new TemaPersonalizadoRedux();
  }

}


/**
 *
 * Custom function for the callback referenced above

 */
if (!function_exists('redux_my_custom_field')):
function redux_my_custom_field($field, $value)
{
  print_r($field);
  print_r($value);
}
endif;

/**
 *
 * Custom function for the callback validation referenced above
 **/
if (!function_exists('redux_validate_callback_function')):
function redux_validate_callback_function($field, $value, $existing_value)
{
  $error = false;
  $value = 'just testing';
  /*
        do your validation

        if(something) {
            $value = $value;
        } elseif(something else) {
            $error = true;
            $value = $existing_value;
            $field['msg'] = 'your custom error message';
        }
        */

  $return['value'] = $value;
  if ($error == true) {
    $return['error'] = $field;
  }
  return $return;
}
endif;
