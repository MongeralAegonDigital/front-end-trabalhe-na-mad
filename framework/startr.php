<?php

// Checamos se já há algo carregando nossa classe de controle
if (!class_exists('StartrCore')) :

/**
 * StartrCore
 *
 * Essa classe cuida da estrutura basica do Startr, como ambienbtes de desenvolvimento, carregamento de modulos e etc.
 * Essa classe também disponibiliza a classe StartrModule, que serve de base para o desenvolvimento de Modulos no sistema.
 */
class StartrCore {
  
  /**
   * @property object $instance Instancia da classe para nos certificarmos que a criamos apenas uma vez.
   */
  private static $instance;
  
  /**
   * @property string $env Definimos o ambiente, pode ser DEV ou PROD.
   */
  public $dev = true;
  
  /*+
   * @property array $dependencies Guarda todos as dependencias que precisamos adicionar.
   */
  public $dependencies = array();
  
  /**
   * @property string $textDomain Dominio de texto desse tema.
   */
  public $textDomain = 'startr';
  
  /**
   * @property string $URL Url do tema.
   */
  public $URL;
  
  /**
   * @property string $path Path do tema.
   */
  public $path;
  
  /**
   * Cria e retorna uma instancia desse objeto.
   * @return object A instancia a ser usada.
   */
  public static function init() {
    // If an instance hasn't been created and set to $instance create an instance and set it to $instance.
    if (null == self::$instance) {self::$instance = new self;}
    return self::$instance;
  }

  /**
   * Constructor, chama e roda nossos metodos.
   * @return null
   */
  public function __construct() {
    
    // Setamos a URL do tema
    $this->path = get_template_directory().'/';
    
    // Setamos a URL do tema
    $this->url = get_template_directory_uri().'/';
    
    // Adicionamos o TGM, para usarmos para requirir plugins depois
    require_once locate_template('inc/tgm.php');
    
    // Configuramos o tema com base no Roots.
    add_action('after_setup_theme', array($this, 'themeSetup'));
    
    // Adiconamos menus e sidebars
    add_action('init', array($this, 'themeMenus'));
    
    // Se em DEV, carrega nossas dependências
    $this->inDev();
    
    // Adicionamos as dependencias que usaremos seja qual for o ambiente
    $this->addDependencies();
    
    // Carregamos as dependencias efetivamente
    add_action('tgmpa_register', array($this, 'loadDependencies'));
    
    // Adicionamos fields adicionais para o ACF
    add_action('after_setup_theme', array($this, 'addOns'));
    
  }
  
  /**
   * Retorna o Path absoluto de certo arquivo ou diretorio.
   * @return string Path Absoluto
   */
  public function path($dir) {
    return $this->path.$dir;
  }
  
  /**
   * Retorna a URL de um arquivo ou diretorio
   * @return string URL
   */
  public function url($dir) {
    return $this->url.$dir;
  }
  
  /**
   * Retorna URL completa para item contido na pasta assets, por padr~åo busca na pasta img.
   * @return string Full URL to path
   */
  public function getAsset($asset, $assetsDir = 'img') {
    return $this->url("assets/$assetsDir/$asset");
  }
  
  /**
   * Configuração básica do tema.
   * Aqui configuramos o tema com base nas disposições do Roots, que usamos como base.
   * @return null
   */
  public function themeSetup() {
    
    // Make theme available for translation
    load_theme_textdomain($this->textDomain, get_template_directory().'/lang');

    // Add post thumbnails (http://codex.wordpress.org/Post_Thumbnails)
    add_theme_support('post-thumbnails');

    // Tell the TinyMCE editor to use a custom stylesheet
    add_editor_style('/assets/css/editor-style.css');
    
  }
  
  /**
   * Criando menus e sidebars, no Tema.
   * Use essa função apra adicionar novos lucais de menu e sidebars
   * @return null
   */
  public function themeMenus() {
    // Register wp_nav_menu() menus (http://codex.wordpress.org/Function_Reference/register_nav_menus)
    register_nav_menus(array(
      'main_menu'   => __('Menu principal', $this->textDomain),
      'footer_menu' => __('Menu do Rodapé', $this->textDomain)
    ));
  }
  
  /**
   * Dependencias DEV
   * Se estivermos em ambiente de DEV, localmente, esse método carrega os módulos especificos e 
   * recomenda os plugins que usaremos.
   * @return null
   */
  public function inDev() {
    
    // Checamos se estamos em ambiente de Desenvolvimento, se nåo estamos, paramos aqui.
    if (!$this->dev) return;
    
    // Adicionamos WordPress reset, apra poder limpar a instalação do WordPress.
    $this->dependencies[] = array(
      'name'             => 'WordPress Reset',
      'slug'             => 'wordpress-reset',
      'force_activation' => true,
    );
    
    // Adicionamos a Debug Bar, plugin importante para achar erros na fase de desenvolvimento.
    $this->dependencies[] = array(
      'name'             => 'WordPress Debug Bar',
      'slug'             => 'debug-bar',
      'force_activation' => true,
    );
    
  }
  
  /**
   * Dependencias normais
   * Carregamos as dependencias que sempre usamos, e que valem tanto para ambiente DEV quanto para PROD,
   * um exemplo é o Advanced Custom Fields.
   * @return null
   */
  public function addDependencies() {
    
    // Adicionamos Advanced Custom Fields
    $this->dependencies[] = array(
      'name'             => 'Advanced Custom Fields',
      'slug'             => 'advanced-custom-fields',
      'required'         => true,
      'force_activation' => true,
    );
    
    // Adicionamos Redux Framework
    $this->dependencies[] = array(
      'name'             => 'Redux Framework',
      'slug'             => 'redux-framework',
      'required'         => true,
      'force_activation' => true,
    );
    
  }
  
  /**
   * Modulos adicionais do ACF
   * Algumas vezes precisamos adicionar custom fields ao ACF, de forma a adicionar alguma funcionalidade que 
   * precisamos para um projeto específico. Para adicionar esses módulos, basta colar o arquivo ou a pasta
   * na nossa pasta add-ons que eles serão automaticamente adicionados.
   */
  public function addOns() {
    
  }
  
  /**
   * Carregamos de fato nossa lista de dependencias via TGM.
   * @return null
   */
  public function loadDependencies() {
    // Carrega via TGM.
    tgmpa($this->dependencies);
  }
  
  /**
   * Adicionamos CPTs usando essa função helper.
   * @param string $name Nome PLURAL do Custom Post Type.
   * @param string $singular Nome singular desse CPT.
   * @param string $slug Slug/ID desse CPT.
   * @param string $icon Dashicon desse post type.
   * @param string/bool $supports False se quiser user o support padrão, array com a support que quiser.
   */
  public function addPostType($nome, $singular, $slug, $icon, $supports = false) {
    
    // Labels
    $labels = array (
      'name'               => __($nome, $this->textDomain),
      'singular_name'      => __($singular, $this->textDomain),
      'add_new'            => __('Novo', $this->textDomain),
      'add_new_item'       => __('Novo ' . $singular, $this->textDomain),
      'edit_item'          => __('Editar ' . $singular, $this->textDomain),    
      'new_item'           => __('Novo ' . $singular, $this->textDomain),
      'all_items'          => __('Todos os ' . $nome, $this->textDomain),
      'view_item'          => __('Ver este ' . $singular, $this->textDomain),
      'search_items'       => __('Buscar ' . $nome, $this->textDomain),
      'not_found'          => __('Novo ' . $nome, $this->textDomain),
      'not_found_in_trash' => __('No ' . $nome . ' in Trash', $this->textDomain),
      'menu_name'          => __($nome, $this->textDomain),
      'parent_item_colon'  => '',
    );
    
    /* If Supports */
    if(!$supports) {
      $supports = array (
        'title', 'editor', 'thumbnail', 'revisions',
        //'author',
        //'excerpt',
        //'comments',
        //'trackbacks',
      );
    }
    
    // Argumentos
    $args = array (
      'capability_type'     => 'post',
      'post_tag'            => false,
      'public'              => true,
      'exclude_from_search' => false,
      'publicly_queryable'  => true,
      'show_ui'             => true,
      'query_var'           => true,
      'has_archive'         => true,
      'menu_icon'           => $icon,
      'supports'            => $supports,
      'labels'              => $labels,
      //'rewrite'           => array ('slug' => 'pt-' . $tipo),   
      //'taxonomies'        => array('slider'),
    );
    
    // Registra efetivamente o CPT
    register_post_type($slug, $args);
    
    // Limpa as regras de rwrite
    flush_rewrite_rules();
    
  }
  
  
  /**
   * Adicionamos taxonomias a um post type específico.
   * @param string $name Nome da taxonomia.
   * @param string/array $type Custom Post type ao qual essa taxonomia se aplicará.
   * @param string $slug Slug dessa taxonomia.
   */
  public function addTaxonomy($name, $type, $slug) {
    // Registramos nossa nova taxonomia
    register_taxonomy(
      $slug,
      $type,
      array(
        'label' => $name,
        'rewrite' => array('slug' => $slug),
        //'meta_box_cb' => $show,
        'show_admin_column' => true,
        'hierarchical'      => true,
      )
    );
  }
  
}

// Fim do if
endif;