<?php $contents = file_get_contents($_GET['url']);

$index = rand(0,6);

$pattern = '/<img.*>/';
preg_match_all($pattern, $contents, $images, PREG_PATTERN_ORDER);

$pattern = '/src=".*"/';
preg_match($pattern, $images[0][$index], $src);

$pattern = '/alt=".*"/';
preg_match($pattern, $images[0][$index], $alt);

$title = substr($alt[0], 5, strlen($alt[0]) -6);

echo "<h1>" . $title . "</h1>";
echo "<img " . $src[0] . " alt='motivation' class='centeredImg'>";

?>
