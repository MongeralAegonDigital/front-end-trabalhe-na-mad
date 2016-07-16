<?php

require '../vendor/autoload.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$usuario = $request->nome;
    $client = new \Github\Client();
    try{
        $repos = $client->api('user')->repositories($usuario);
        echo json_encode($repos);
    }  catch (Exception $ex){
        echo null;   
    }
 