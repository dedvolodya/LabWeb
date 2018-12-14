<?php
$dom = new DOMDocument;
$dom->load("words.xml");
$words = $dom->getElementsByTagName('word');
$nd;
foreach ($words as $word) {
    if ($word->nodeValue == $_POST["word"]) {
    	$nd = $word;
    }
}
$nd->parentNode->removeChild($nd);
$dom->save("words.xml");
?>
