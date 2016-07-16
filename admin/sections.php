<?php

$sections = array();

/*
 * Section
 * - Endereços
 */

$fields = array();

for ($i = 1; $i <= 4; $i++) {

    $name = ($i <= 1) ? "Principal" : $i;
    /* Add Switch */
    $fields[] = 
    array(
        'id'        => "section-endereco-{$i}",
        'type'      => 'section',
        'title'     => "Endereço " . $name,
        'subtitle'  => 'Edite as informações desse endereço.',
        'indent'    => true,
    );

    $fields[] = 
    array(
        'id'        => "address-on-{$i}",
        'type'      => 'switch',
        'title'     => "Mostrar Endereço " . $name,
        'subtitle'  => "Mostrar ou nao opções desse endereço",
        'default'   => ($i <= 2) ? true : false
    );    

    /* Rua */
    $fields[] =   
    array(
        'id' => "street-{$i}",
        'type' => 'text',
        'title' => "Rua",
        'required'  => array("address-on-{$i}", "=", "1"),
        'default' => 'Rua Bernardino Alexandre'
    );

    /* Numero */
    $fields[] = 
    array(
        'id' => "number-{$i}",
        'type' => 'text',
        'title' => "Número",
        'required'  => array("address-on-{$i}", "=", "1"),
        'default' => '169'
    );

    /* Cidade */
    $fields[] = 
    array(
        'id' => "city-{$i}",
        'type' => 'text',
        'title' => "Cidade",
        'required'  => array("address-on-{$i}", "=", "1"),
        'default' => 'São Paulo'
    );

    /* Estado */
    $fields[] = 
    array(
        'id' => "state-{$i}",
        'type' => 'text',
        'title' => "Estado",
        'required'  => array("address-on-{$i}", "=", "1"),
        'default' => 'São Paulo'
    );

    /* CEP */
    $fields[] = 
    array(
        'id' => "cep-{$i}",
        'type' => 'text',
        'title' => "CEP",
        'required'  => array("address-on-{$i}", "=", "1"),
        'default' => '00000-000'
    );
}


$sections[] = array(
    'title' => "Endereços",
    'desc' => 'Edite os enderços da sua empresa',
    'icon' => 'el-icon-globe',
    'fields' => $fields
);

/*
 * Section
 * - Contato
 */
$sections[] = array(
    'title' => "Contato",
    'desc' => 'Edite as informações de contato da sua empresa',
    'icon' => 'el-icon-address-book',
    'fields' => array(

        /* Email */
        array(
            'id' => 'tel',
            'type' => 'multi_text',
            'title' => "Telefones de Contato",
            'subtitle' => "Adicione os telefones de contato da sua empresa.",
            'desc' => "Liste-os em ordem de importância do mais importante para o menos importante.",
            'default' => array(
                "(+55) 11 1111-1111",
                "(+55) 11 1111-1111",
            )
        ),

        array(
            'id' => 'email',
            'type' => 'multi_text',
            'title' => "Emails de contato",
            'subtitle' => "Entre com os emails de contato de sua empresa.",
            'desc' => "Liste-os em ordem de importância do mais importante para o menos importante.",
            'validate'  => 'email',
            'default' => array(
                "contato@empresa.com.br",
                "contato@empresa.com.br",
            )  
        ),

        /* Section: Social Networks */
        array(
            'id'        => 'section--social',
            'type'      => 'section',
            'title'     => 'Redes Sociais',
            'subtitle'  => 'Coloque os links das redes sociais da sua empresa.',
            'indent'    => true
        ),

        array(
            'id' => 'facebook',
            'type' => 'text',
            'title' => "Página no Facebook",
            'subtitle' => "Link para Fanpage o Facebook.",
            'desc' => "Coloque o link completo, por favor.",
            'validate'  => 'url',
            'default'   => 'http://facebook.com',
        ),

        array(
            'id' => 'twitter',
            'type' => 'text',
            'title' => "Twitter",
            'subtitle' => "Link para perfil no Twitter.",
            'desc' => "Coloque o link completo, por favor.",
            'validate'  => 'url',
            'default' => "http://www.twitter.com/suaempresa"
        ),

        array(
            'id' => 'instagram',
            'type' => 'text',
            'title' => "Instagram",
            'subtitle' => "Link para perfil no Instagram.",
            'desc' => "Coloque o link completo, por favor.",
            'validate'  => 'url'
        ),

        array(
            'id' => 'pinterest',
            'type' => 'text',
            'title' => "Pinterest",
            'subtitle' => "Link para perfil no Pinterest.",
            'desc' => "Coloque o link completo, por favor.",
            'validate'  => 'url'
        ),

        array(
            'id' => 'google-plus',
            'type' => 'text',
            'title' => "Google Plus",
            'subtitle' => "Link para perfil no Google Plus.",
            'desc' => "Coloque o link completo, por favor.",
            'validate'  => 'url'
        ),

        array(
            'id' => 'skype',
            'type' => 'text',
            'title' => "Skype",
            'subtitle' => "Nome no skype."
        ),

    )
);

/*
 * Section
 * - Google Analytics
 */
$sections[] = array(
    'title' => "Google Analytics",
    'desc' => 'Edite seu código Google Analytics',
    'icon' => 'el-icon-graph',
    // Leave this as a blank section, no options just some intro text set above.
    'fields' => array(
        array(
            'id'        => 'google-analytics',
            'type'      => 'ace_editor',
            'mode'      => 'php',
            'title'     => 'Código de Rastreamento - Google Analytics',
            'subtitle'  => 'Cole o código de rastreio do Google Analytics aqui.'
        ),
    )
);

/*
 * Injections
 */
require_once "order.php";