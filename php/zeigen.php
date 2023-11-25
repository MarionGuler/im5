<!-- view_comments.php -->
<?php
// Dateipfad zur Speicherung der Kommentare
$commentFile = 'kommentar.txt';

// Kommentare aus der Datei lesen
$comments = file_get_contents($commentFile);

// Kommentare anzeigen
echo nl2br($comments); // nl2br wandelt Zeilenumbrüche in <br> Tags um
?>