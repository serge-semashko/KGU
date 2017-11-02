<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Роман
 * Date: 07.11.11
 * Time: 0:44
 * To change this template use File | Settings | File Templates.
 */

require_once("Aliases.class.php");

class Data {

    public static function getKGU1Data() {
        $body = file_get_contents("http://159.93.126.233:8080/proxy.cgi?id=6");

        $result = array();

        $json = json_decode($body);
        $aliases = Aliases::getKGU1Aliases();
        foreach ($aliases as $key => $value)
        {
            $id = $value['id'];
            $count = count($json->ID);
            $result[$key] = '---';
            for ($i = 0; $i < $count; $i++)
            {
                if ($json->ID[$i] == $id)
                {
                    $startIndex = 0;
                    for ($j = 0; $j < $i; $j++)
                        $startIndex += $json->VC[$j];

                    for ($j = $startIndex; $j < $startIndex + $json->VC[$i]; $j++)
                    {
                        if ($json->VN[$j] == $value['varname'])
                        {
                            $result[$key] = (string)round(str_replace(",", ".", $json->VV[$j]), 3);
                            break;
                        }
                    }
                }
            }
        }

        return $result;
    }

    public static function getKGU2Data() {
        $body = file_get_contents("http://159.93.126.233:8080/proxy.cgi?id=6");

        $result = array();

        $json = json_decode($body);
        $aliases = Aliases::getKGU2Aliases();
        foreach ($aliases as $key => $value)
        {
            $id = $value['id'];
            $count = count($json->ID);
            $result[$key] = '---';
            for ($i = 0; $i < $count; $i++)
            {
                if ($json->ID[$i] == $id)
                {
                    $startIndex = 0;
                    for ($j = 0; $j < $i; $j++)
                        $startIndex += $json->VC[$j];

                    for ($j = $startIndex; $j < $startIndex + $json->VC[$i]; $j++)
                    {
                        if ($json->VN[$j] == $value['varname'])
                        {
                            $result[$key] = (string)round(str_replace(",", ".", $json->VV[$j]), 3);
                            break;
                        }
                    }
                }
            }
        }

        return $result;
    }

}
