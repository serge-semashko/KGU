<?php
    
class Cache
{
    static $instance = false;
    private $Data;
    
    private function __construct() { /* ... */ }
    private function __clone() { /* ... */ }

    static function getInstance()
    {
        if (self::$instance == false)
            self::$instance = new Cache;
        
        return self::$instance;
    }
    
    public function needUpdate()
    {
        if (!file_exists("cache.xml"))
            return true;
            
        $xml = simplexml_load_file("cache.xml");
        
        return (($xml == null) || ($xml->Timestamp == null) || 
                (time() - $xml->Timestamp > 5));
    }
    
    public function update($data)
    {
        $doc = new DOMDocument();
       
        $root = $doc->createElement("Cache");
        $doc->appendChild($root);

        $date = $doc->createElement("Date");
        $root->appendChild($date);
        
        $timestamp = $doc->createElement("Timestamp");
        $root->appendChild($timestamp);

        $cache_data = $doc->createElement("CacheData");
        $root->appendChild($cache_data);
        
        $date->appendChild(new DOMText(date(DATE_ATOM)));
        $timestamp->appendChild(new DOMText(time()));
        $cache_data->appendChild(new DOMText($data));
        
        $doc->save("cache.xml");
        $this->Data = $data;
    }
    
    public function getData()
    {
        $xml = simplexml_load_file("cache.xml");
        
        if (($xml != null) && ($xml->CacheData != null))
            return $xml->CacheData;
    }
}
?>