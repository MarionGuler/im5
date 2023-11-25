

document.addEventListener('DOMContentLoaded', function() {
    const nextPageArrow = document.getElementById('nextPageArrow');
    
    // Funktion zum Einblenden der nächsten Seite
    function showNextPage() {
        window.location.href = 'linien.html'; // Verlinkung zur nächsten Seite
    }
    
    nextPageArrow.addEventListener('click', showNextPage);

    // Pfeil-Icons von rechts nach links verschieben
    setTimeout(function() {
        nextPageArrow.style.right = '20px'; // Neue Position nach rechts einschieben
    }, 500); //Verzögerungszeit anpassen
});

document.addEventListener('DOMContentLoaded', function() { 
    const textElement = document.getElementById('text');
    const textToWrite = 'Architekturfotografie ist die Kunst, Gebäude und architektonische Strukturen durch sorgfältige Komposition, Perspektive und Lichtführung in ästhetisch ansprechenden Fotografien festzuhalten';
    let currentIndex = 0;

    function writeText() {
        if (currentIndex < textToWrite.length) {
            textElement.innerHTML += textToWrite.charAt(currentIndex);
            currentIndex++;
            setTimeout(writeText, 50); // Verzögerung kann verändert werden
        }
    }

    writeText();
});


