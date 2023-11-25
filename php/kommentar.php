<!-- zur Verarebitung der Kommentare -->
<?php
$name = $_POST['name'];
$comment = $_POST['comment'];

$commentFile = 'kommentar.txt';
$newComment = "Name: $name\nKommentar: $comment\n\n";
file_put_contents($commentFile, $newComment, FILE_APPEND);
?>