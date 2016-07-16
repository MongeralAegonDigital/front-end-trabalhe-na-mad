<?php

if (!class_exists("LoadModules")) {
  /**
   * Essa classe cuida dos requires e includes de modulos
   *
   * A Ideia é além de tudo, ser o mais modulas possível, de forma que seja simples
   * reaproveitar o trabalho feito em um projeto em outro, e essa classe é fundamental no processo.
   *
   * @category   Modules
   * @version    Release: 1.0.0
   * @see        ModuleCanvas
   * @since      Class available since Release 1.0.0
   */
  class LoadModules {

    /**
     * Módulos prioritários que devem ser chamados antes de todos os demais.
     *
     * Adicione os nomes, na ordem, dos módulos que devem ser adicionados primeiro.
     *
     * @var array
     * @access private
     */
    private $first_modules;

    /**
     * Constructor usado para adicionar first modules e dar inicio ao programa
     *
     * @return null
     *
     * @access public
     * @since Method available since Release 1.0.0
     */
    public function __construct($first_modules = array()) {
      global $Tema;
      
      /* Setamos os modulos prioritários */
      if (is_array($first_modules))
        $this->first_modules = $first_modules;
      else
        throw new ErrorException('$first_modules precisa ser uma array!');

      /* Load modulos prioritários */
      foreach ($this->first_modules as $module) {
        require_once $Tema->path."/modules/{$module}/module.php";
      }

      /* Carregamos os demais módulos, de acordo com a versão do PHP */
      $phpversion = phpversion();

      if (version_compare($phpversion, '5.2.11', '<'))
        $this->ModulesInclude();
      else
        $this->ModulesIncludeFallback();

    }

    /**
     * Cuida dos includes, em versões recentes do PHP
     *
     * @return null
     *
     * @access public
     * @since Method available since Release 1.0.0
     */
    private function ModulesInclude() {
      global $Tema;
      
      $modules_path = new RecursiveDirectoryIterator($Tema->path . '/modules/');
      $recIterator = new RecursiveIteratorIterator($modules_path);
      $regex = new RegexIterator($recIterator, '/\/module.php$/i');

      foreach ($regex as $item) {
        include $item->getPathname();
      }
    }

    /**
     * Cuida dos includes, em versões antigas do PHP
     *
     * @return null
     *
     * @access public
     * @since Method available since Release 1.0.0
     */
    private function ModulesIncludeFallback() {
      global $Tema;
      
      foreach (glob($Tema->path.'/modules/*/module.php') as $module) {
        include $module;
      }
    }
  }
  /* Class Ends */

  function loadmodules() {
    
    /* Setamos módulos prioritários */
    $modules = array();
    new LoadModules($modules);
    
  }

  /* Carregamos Módulos */
  //loadmodules();
  add_action('init', "loadmodules");
}