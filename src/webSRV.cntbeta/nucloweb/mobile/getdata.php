<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Роман
 * Date: 07.11.11
 * Time: 0:46
 * To change this template use File | Settings | File Templates.
 */
 
require_once('php/Data.class.php');

$mode = 'kgu1';
if (isset($_GET['mode']))
    $mode = $_GET['mode'];

if (strcmp($mode, 'kgu1') === 0)
    $json = json_encode(Data::getKGU1Data());
else if (strcmp($mode, 'kgu2') === 0)
    $json = json_encode(Data::getKGU2Data());
else
    $json = "{}";

echo $json;