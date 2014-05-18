<?php $contents = file_get_contents($_GET['url']);

$pattern = '/<img.*>/';
preg_match($pattern, $contents, $matches);
echo $matches[0];

?>
