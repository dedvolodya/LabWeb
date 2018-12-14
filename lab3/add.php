<?php
 	$dom = new DomDocument();
    $dom->load("words.xml");
   	$dom->formatOutput = true;
    $xpath = new DOMXPath ($dom);
    $parent = $xpath->query ('//xml');
    $next = $xpath->query ('//xml/word');
    $new_item = $dom->createElement ('word', $_POST["word"]);
    $parent->item(0)->insertBefore($new_item, $next->item(0));
   
    $dom->save("words.xml");
?>