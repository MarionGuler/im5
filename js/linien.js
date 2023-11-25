

document.addEventListener('DOMContentLoaded', function() {
    const nextPageArrow = document.getElementById('nextPageArrow');
    
    // Funktion zum Einblenden der nächsten Seite
    function showNextPage() {
        window.location.href = 'farbe.html'; // Verlinkung zur nächsten Seite
    }
    
    nextPageArrow.addEventListener('click', showNextPage);

    // Pfeil-Icons von rechts nach links verschieben
    setTimeout(function() {
        nextPageArrow.style.right = '20px'; // Neue Position nach rechts einschieben
    }, 500); //Verzögerungszeit anpassen
});

