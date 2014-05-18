<?php $contents = file_get_contents($_GET['url']);

$index = 0;

$pattern = '/<img.*>/';
preg_match($pattern, $contents, $images);

$pattern = '/src=".*"/';
preg_match($pattern, $images[$index], $src);

$pattern = '/alt=".*"/';
preg_match($pattern, $images[$index], $alt);

$title = substr($alt[0], 5, strlen($alt[0]) -6);

echo "<h1>" . $title . "</h1>";
echo "<img " . $src[0] . " alt='motivation' class='centeredImg'>";

?>
