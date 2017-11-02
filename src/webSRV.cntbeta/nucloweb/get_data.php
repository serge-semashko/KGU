<?php
    if (!isset($_GET['callback']))
        die;
   
    include 'Cache.php';
    include '../JSON/JSON.php';
    
    
    $callback = $_GET['callback'];
    $cache = Cache::getInstance();
    if ($cache->needUpdate())
    {
    
        $jsonData = file_get_contents('http://159.93.126.233:8080/proxy.cgi?id=6');
        $cache->update($jsonData);

        /*$ch = curl_init("http://192.168.0.236:8080/proxy.cgi?id=5");

        curl_setopt($ch, CURLOPT_HEADER,         0);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    
        $contents = curl_exec($ch);
        curl_close($ch);
        
        $cache->update($contents);*/
        
        
    }
    
    echo JSON::enclose($callback, $cache->getData());
?>